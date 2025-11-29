from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
from typing import List
import shutil
import os
from pathlib import Path
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.rag import rag_service
from app.models.document import DocumentChunk

router = APIRouter()

UPLOAD_DIR = Path("/tmp/uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

@router.post("/upload")
async def upload_files(
    files: List[UploadFile] = File(...),
    db: Session = Depends(get_db)
):
    """
    Upload files for RAG processing (PDF).
    Parses PDF, chunks text, generates embeddings, and saves to DB.
    """
    uploaded_files = []
    
    for file in files:
        try:
            # 1. Save file locally
            file_path = UPLOAD_DIR / file.filename
            with file_path.open("wb") as buffer:
                shutil.copyfileobj(file.file, buffer)
            
            # 2. Process file (Split & Embed)
            chunks = rag_service.process_file(str(file_path))
            
            # 3. Save to DB
            for chunk in chunks:
                db_chunk = DocumentChunk(
                    filename=file.filename,
                    content=chunk["content"],
                    embedding=chunk["embedding"]
                )
                db.add(db_chunk)
            
            db.commit()
            
            uploaded_files.append({
                "filename": file.filename,
                "chunks_processed": len(chunks),
                "status": "indexed"
            })
            
        except Exception as e:
            db.rollback()
            raise HTTPException(status_code=500, detail=f"Could not process file {file.filename}: {str(e)}")
            
    return {"message": "Files processed and indexed successfully", "files": uploaded_files}
