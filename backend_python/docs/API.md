# API Documentation

## Base URL

```
http://localhost:8001
```

## Endpoints

### 1. Health Check

**GET** `/health`

Returns the health status of the AI Engine.

**Response:**

```json
{
  "service": "ai-engine",
  "status": "healthy"
}
```

---

### 2. Chat Completions (OpenAI Compatible)

**POST** `/v1/inference/chat/completions`

Send a chat completion request. Forwards to Ollama.

**Request Body:**

```json
{
  "max_tokens": 1000,
  "messages": [{ "role": "user", "content": "Hello, how are you?" }],
  "model": "llama3",
  "temperature": 0.7
}
```

**Response:**

```json
{
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "I'm doing well, thank you!"
      },
      "finish_reason": "stop"
    }
  ],
  "created": 1234567890,
  "id": "chatcmpl-123",
  "model": "llama3",
  "object": "chat.completion",
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 15,
    "total_tokens": 25
  }
}
```

---

### 3. File Upload & RAG Ingestion

**POST** `/v1/ingest/upload`

Upload PDF files for RAG processing.

**Request:**

- Content-Type: `multipart/form-data`
- Field: `files` (one or more PDF files)

**Response:**

```json
{
  "files": [
    {
      "filename": "document.pdf",
      "chunks_processed": 15,
      "status": "indexed"
    }
  ],
  "message": "Files processed and indexed successfully"
}
```

---

### 4. Agent Management

#### Create Agent

**POST** `/v1/agents/`

**Request Body:**

```json
{
  "description": "Handles customer inquiries",
  "model_config": {
    "model": "llama3",
    "temperature": 0.5
  },
  "name": "Customer Support Agent",
  "system_prompt": "You are a helpful customer support assistant."
}
```

#### List Agents

**GET** `/v1/agents/`

Returns all active agents.

#### Get Agent

**GET** `/v1/agents/{agent_id}`

#### Delete Agent

**DELETE** `/v1/agents/{agent_id}`

---

### 5. Evaluation Pipeline

#### Run Evaluation

**POST** `/v1/evaluation/run`

**Request Body:**

```json
{
  "metrics": ["latency", "relevance"],
  "model_name": "llama3",
  "test_queries": ["What is machine learning?", "Explain neural networks"]
}
```

**Response:**

```json
{
  "evaluation_id": "abc123",
  "status": "completed",
  "model_name": "llama3",
  "scores": {
    "avg_latency_ms": 150.5,
    "avg_relevance": 0.85
  },
  "details": [...]
}
```

#### Get Evaluation Results

**GET** `/v1/evaluation/results/{evaluation_id}`

---

### 6. MLflow Status

**GET** `/v1/mlflow/status`

Check MLflow connection status.

**Response:**

```json
{
  "experiment_count": 5,
  "status": "connected",
  "tracking_uri": "http://mlflow:5000"
}
```

---

## Interactive Documentation

Visit `http://localhost:8001/docs` for Swagger UI.
