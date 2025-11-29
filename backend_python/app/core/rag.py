from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader
from typing import List
import logging

logger = logging.getLogger(__name__)

class RAGService:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(RAGService, cls).__new__(cls)
            cls._instance._initialized = False
        return cls._instance

    def __init__(self):
        if self._initialized:
            return
            
        logger.info("Initializing RAG Service (loading embedding model)...")
        # Load local embedding model (small and fast)
        self.embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=500,
            chunk_overlap=50
        )
        self._initialized = True
        logger.info("RAG Service initialized.")

    def process_file(self, file_path: str) -> List[dict]:
        """
        Load PDF, split, and generate embeddings.
        Returns a list of dicts with content and embedding.
        """
        try:
            loader = PyPDFLoader(file_path)
            documents = loader.load()
            chunks = self.text_splitter.split_documents(documents)
            
            results = []
            for chunk in chunks:
                embedding = self.embeddings.embed_query(chunk.page_content)
                results.append({
                    "content": chunk.page_content,
                    "embedding": embedding,
                    "metadata": chunk.metadata
                })
            
            return results
        except Exception as e:
            logger.error(f"Error processing file {file_path}: {e}")
            raise e

    def search(self, query: str, db, limit: int = 3) -> List[str]:
        """
        Search for relevant document chunks in the database.
        """
        try:
            # Generate embedding for the query
            query_embedding = self.embeddings.embed_query(query)
            
            # Perform vector search using pgvector
            from app.models.document import DocumentChunk
            
            # L2 distance search (closest neighbors)
            results = db.query(DocumentChunk).order_by(
                DocumentChunk.embedding.l2_distance(query_embedding)
            ).limit(limit).all()
            
            return [chunk.content for chunk in results]
        except Exception as e:
            logger.error(f"Error searching documents: {e}")
            return []

rag_service = RAGService()
