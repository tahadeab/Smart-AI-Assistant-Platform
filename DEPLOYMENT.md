# Deployment Guide

## Overview

This guide covers how to deploy the Smart AI Assistant Platform using Docker Compose.

## Prerequisites

- **Docker Engine** (v24+)
- **Docker Compose** (v2.20+)
- **NVIDIA Container Toolkit** (Optional, for local GPU inference)

## Configuration

1. **Environment Variables**:
   Navigate to `docker-compose/local/` and ensure `.env` is configured.

   ```bash
   cp .env.example .env
   ```

   Key variables:
   - `OPENAI_API_KEY`: If using external models.
   - `POSTGRES_PASSWORD`: DB password.
   - `MINIO_ROOT_PASSWORD`: Object storage password.

2. **Network Ports**:
   Ensure the following ports are free:
   - `3210`: LobeChat Frontend
   - `8001`: AI Engine Backend
   - `5000`: MLflow
   - `9000/9001`: MinIO
   - `5432`: PostgreSQL

## Deployment Steps

1. **Build and Start**:
   Run the following command from the project root:

   ```bash
   cd docker-compose/local
   docker compose up -d --build
   ```

2. **Verify Services**:
   Check if all containers are running:

   ```bash
   docker compose ps
   ```

   You should see:
   - `lobe-chat`
   - `lobe-ai-engine`
   - `lobe-mlflow`
   - `lobe-postgres`
   - `lobe-minio`

3. **Access the Platform**:
   - **Frontend**: <http://localhost:3210>
   - **AI Engine Docs**: <http://localhost:8001/docs>
   - **MLflow UI**: <http://localhost:5000>

## Scaling

To scale the AI Engine (e.g., for higher throughput):

```bash
docker compose up -d --scale ai-engine=3
```

_Note: You will need a load balancer (like Nginx) in front to distribute traffic if you do this, or rely on Docker's internal DNS round-robin._

## Troubleshooting

- **Database Connection Failed**: Ensure `postgres-init` scripts ran successfully. Check logs: `docker compose logs lobe-postgres`.
- **MLflow Artifact Error**: Ensure MinIO bucket `lobe` exists. The startup script in `docker-compose.yml` attempts to create it.
