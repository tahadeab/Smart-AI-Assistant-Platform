import httpx
import json
import time
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from app.core.config import settings
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatCompletionRequest(BaseModel):
    model: str
    messages: List[ChatMessage]
    temperature: Optional[float] = 0.7
    max_tokens: Optional[int] = 1000
    stream: Optional[bool] = False

class ChatCompletionResponseChoice(BaseModel):
    index: int
    message: ChatMessage
    finish_reason: str

class ChatCompletionResponse(BaseModel):
    id: str
    object: str = "chat.completion"
    created: int
    model: str
    choices: List[ChatCompletionResponseChoice]
    usage: Dict[str, int]

OLLAMA_BASE_URL = "http://ollama:11434/api/chat"

@router.post("/chat/completions")
async def chat_completions(request: ChatCompletionRequest):
    """
    Forward chat completion requests to Ollama (running locally).
    """
    try:
        # Convert messages to Ollama format
        ollama_messages = [{"role": m.role, "content": m.content} for m in request.messages]
        
        payload = {
            "model": request.model, # e.g., "llama3"
            "messages": ollama_messages,
            "stream": False, # TODO: Implement streaming support
            "options": {
                "temperature": request.temperature,
                "num_predict": request.max_tokens
            }
        }

        logger.info(f"Forwarding request to Ollama: {request.model}")

        async with httpx.AsyncClient() as client:
            try:
                response = await client.post(OLLAMA_BASE_URL, json=payload, timeout=60.0)
                response.raise_for_status()
                ollama_data = response.json()
            except httpx.ConnectError:
                 # Fallback for testing if Ollama isn't ready
                 logger.warning("Ollama not reachable, returning mock response")
                 return ChatCompletionResponse(
                    id="chatcmpl-fallback",
                    created=int(time.time()),
                    model=request.model,
                    choices=[
                        ChatCompletionResponseChoice(
                            index=0,
                            message=ChatMessage(role="assistant", content="Error: Ollama service is not reachable. Please ensure the 'ollama' container is running and you have pulled a model (e.g., `docker exec -it lobe-ollama ollama pull llama3`)."),
                            finish_reason="stop"
                        )
                    ],
                    usage={"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0}
                )

        # Map Ollama response to OpenAI format
        return ChatCompletionResponse(
            id="chatcmpl-" + str(int(time.time())),
            created=int(time.time()),
            model=request.model,
            choices=[
                ChatCompletionResponseChoice(
                    index=0,
                    message=ChatMessage(
                        role=ollama_data.get("message", {}).get("role", "assistant"),
                        content=ollama_data.get("message", {}).get("content", "")
                    ),
                    finish_reason="stop" if ollama_data.get("done") else "length"
                )
            ],
            usage={
                "prompt_tokens": ollama_data.get("prompt_eval_count", 0),
                "completion_tokens": ollama_data.get("eval_count", 0),
                "total_tokens": ollama_data.get("prompt_eval_count", 0) + ollama_data.get("eval_count", 0)
            }
        )

    except Exception as e:
        logger.error(f"Error in chat_completions: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
