# Developer Onboarding Guide

Welcome to the Smart AI Assistant Platform team! This guide will help you get set up and contributing.

## 1. Prerequisites

- **OS**: Windows (WSL2 recommended), Linux, or macOS.
- **Tools**:
  - Docker Desktop
  - Python 3.11+
  - Node.js 20+
  - Git

## 2. Setup

### Clone Repository

```bash
git clone <repo-url>
cd lobe-chat-next
```

### Environment Variables

Copy the example env file:

```bash
cd docker-compose/local
cp .env.example .env
```

_Note: Update `OPENAI_API_KEY` or other secrets in `.env` if needed._

### Start Services

```bash
docker compose up -d
```

This will start:

- LobeChat Frontend (<http://localhost:3210>)
- AI Engine (<http://localhost:8001>)
- MLflow (<http://localhost:5000>)
- MinIO (<http://localhost:9000>)
- PostgreSQL (localhost:5432)

## 3. Development Workflow

### Python Backend (`backend_python/`)

1. Create virtual env: `python -m venv venv`
2. Activate: `.\venv\Scripts\Activate` (Windows) or `source venv/bin/activate` (Linux/Mac)
3. Install deps: `pip install -r requirements.txt`
4. Run locally: `uvicorn app.main:app --reload --port 8001`

### Frontend (`/`)

1. Install deps: `pnpm install`
2. Run dev: `pnpm dev`

## 4. Common Tasks

### Adding a New API Endpoint

1. Create new file in `backend_python/app/api/v1/endpoints/`.
2. Define router and endpoints.
3. Register router in `backend_python/app/main.py`.

### Database Migration

Currently using `sqlalchemy.create_all`. For production, we will switch to Alembic.
To change schema:

1. Modify models in `backend_python/app/models/`.
2. Restart backend service.

## 5. Troubleshooting

- **Container fails to start**: Check logs `docker compose logs -f <service_name>`.
- **Database connection error**: Ensure Postgres is healthy (`docker compose ps`).
