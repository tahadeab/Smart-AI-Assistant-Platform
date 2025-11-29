# User Manual - Smart AI Assistant Platform

## Getting Started

### 1. Access the Platform

Open your browser and navigate to:

- **LobeChat UI**: <http://localhost:3210>
- **AI Engine API**: <http://localhost:8001/docs>
- **MLflow Dashboard**: <http://localhost:5000>

### 2. First-Time Setup

#### Pull a Model (Required)

Before you can chat, you need to download a model:

```bash
docker exec -it lobe-ollama ollama pull llama3
```

Available models:

- `llama3` (Recommended, 4.7GB)
- `mistral` (4.1GB)
- `phi3` (2.3GB, faster but less capable)

### 3. Using the Chat Interface

1. **Start a Conversation**:
   - Click "New Chat" in LobeChat.
   - Type your message and press Enter.

2. **Upload Documents (RAG)**:
   - Use the API endpoint `/v1/ingest/upload` to upload PDFs.
   - Example using `curl`:
     ```bash
     curl -X POST "http://localhost:8001/v1/ingest/upload" \
       -F "files=@document.pdf"
     ```
   - Once uploaded, the AI can answer questions about the document content.

3. **Create Custom Agents**:
   - Go to `http://localhost:8001/docs`.
   - Use the `/v1/agents/` endpoint to create agents with custom system prompts.
   - Example:
     ```json
     {
       "model_config": { "model": "llama3", "temperature": 0.3 },
       "name": "Code Reviewer",
       "system_prompt": "You are an expert code reviewer. Analyze code for bugs and best practices."
     }
     ```

### 4. Monitoring & Evaluation

#### View Experiments in MLflow

1. Open <http://localhost:5000>.
2. Browse experiments to see:
   - Model performance metrics
   - Evaluation results
   - Latency measurements

#### Run Evaluations

Use the `/v1/evaluation/run` endpoint to test model quality:

```bash
curl -X POST "http://localhost:8001/v1/evaluation/run" \
  -H "Content-Type: application/json" \
  -d '{
    "model_name": "llama3",
    "test_queries": ["What is AI?", "Explain transformers"],
    "metrics": ["latency", "relevance"]
  }'
```

### 5. Tips & Best Practices

- **Performance**: Use smaller models (like `phi3`) if you have limited GPU/RAM.
- **RAG Quality**: Upload high-quality, well-structured PDFs for best results.
- **Temperature**: Lower values (0.1-0.3) for factual tasks, higher (0.7-1.0) for creative tasks.

### 6. Troubleshooting

**Problem**: Chat responses are slow.

- **Solution**: Ensure you're using a GPU-enabled Docker setup, or switch to a smaller model.

**Problem**: "Ollama not reachable" error.

- **Solution**: Check if the Ollama container is running: `docker ps | grep ollama`.

**Problem**: RAG not finding relevant documents.

- **Solution**: Ensure documents are uploaded and indexed. Check the database: `docker exec -it lobe-postgres psql -U postgres -d ai_engine -c "SELECT COUNT(*) FROM document_chunks;"`
