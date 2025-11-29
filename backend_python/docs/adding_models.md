# How to Add a New Model to the Platform

This guide explains how to integrate a new LLM (e.g., Qwen, Gemma) into the AI Engine.

## Option 1: Using Ollama (Recommended)

### Step 1: Pull the Model

```bash
docker exec -it lobe-ollama ollama pull qwen2:7b
```

### Step 2: Use in Chat

The model is now available. When making a chat request, specify:

```json
{
  "model": "qwen2:7b",
  "messages": [...]
}
```

That's it! The `inference.py` endpoint automatically forwards to Ollama.

---

## Option 2: Using vLLM (For Production)

### Step 1: Add vLLM Service to Docker Compose

Edit `docker-compose/local/docker-compose.yml`:

```yaml
vllm:
  image: vllm/vllm-openai:latest
  container_name: lobe-vllm
  network_mode: 'service:network-service'
  environment:
    - MODEL_NAME=meta-llama/Llama-3-8B-Instruct
  command: >
    --model meta-llama/Llama-3-8B-Instruct
    --host 0.0.0.0
    --port 8080
  volumes:
    - vllm_cache:/root/.cache/huggingface
  deploy:
    resources:
      reservations:
        devices:
          - driver: nvidia
            count: 1
            capabilities: [gpu]
```

### Step 2: Update Inference Endpoint

Modify `backend_python/app/api/v1/endpoints/inference.py`:

```python
VLLM_BASE_URL = "http://vllm:8080/v1/chat/completions"

# In chat_completions function, add routing logic:
if request.model.startswith("vllm/"):
    response = await client.post(VLLM_BASE_URL, json=payload)
else:
    response = await client.post(OLLAMA_BASE_URL, json=payload)
```

---

## Option 3: Custom Model via Transformers

### Step 1: Install Dependencies

Add to `requirements.txt`:

```
transformers>=4.36.0
torch>=2.1.0
accelerate>=0.25.0
```

### Step 2: Create Model Loader

Create `backend_python/app/core/model_loader.py`:

```python
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

class ModelLoader:
    def __init__(self, model_name: str):
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModelForCausalLM.from_pretrained(
            model_name,
            torch_dtype=torch.float16,
            device_map="auto"
        )

    def generate(self, prompt: str, max_tokens: int = 100):
        inputs = self.tokenizer(prompt, return_tensors="pt").to("cuda")
        outputs = self.model.generate(**inputs, max_new_tokens=max_tokens)
        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)
```

### Step 3: Use in Inference

Update `inference.py` to use the custom loader for specific models.

---

## Best Practices

1. **Model Selection**:
   - **Ollama**: Best for quick prototyping and testing.
   - **vLLM**: Best for production (faster inference, batching).
   - **Transformers**: Best for custom fine-tuned models.

2. **GPU Memory**:
   - Monitor GPU usage: `nvidia-smi`
   - Use quantization (4-bit, 8-bit) for larger models on limited hardware.

3. **Caching**:
   - Models are cached in Docker volumes to avoid re-downloading.
