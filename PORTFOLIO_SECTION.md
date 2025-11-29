# Professional Portfolio Section

## Project: Smart AI Assistant Platform (Enterprise-Grade LLM System)

**Role:** Lead System Architect & Full-Stack AI Engineer

**Description:**
Designed and engineered a production-ready, scalable AI platform inspired by LobeChat, featuring a custom "Sidecar Architecture" to integrate high-performance Python ML services with a modern Next.js frontend. The system supports multi-agent workflows, RAG (Retrieval-Augmented Generation), and full lifecycle experiment tracking.

**Key Technical Achievements:**

- **Architecture Design:** Implemented a microservices-based "Sidecar" pattern using **Docker Compose**, decoupling the **Next.js** frontend from the **FastAPI** AI Engine to ensure scalability and independent scaling.
- **AI Engine Development:** Built a robust Python backend (`FastAPI`, `Pydantic`) handling custom model inference (OpenAI-compatible API), document ingestion, and embedding generation.
- **MLOps Integration:** Integrated **MLflow** for comprehensive experiment tracking, model registry, and performance metrics visualization, enabling data-driven model iteration.
- **RAG Pipeline:** Engineered a Retrieval-Augmented Generation pipeline using **LangChain**, **PGVector**, and **PostgreSQL**, allowing the system to answer questions based on uploaded documents (PDF/Docx) with high accuracy.
- **Database Design:** Designed a multi-tenant database schema using **PostgreSQL** and **SQLAlchemy**, managing complex relationships between Agents, Conversations, and Evaluation metrics.
- **DevOps & Security:** Automated deployment with **Docker**, configured **Nginx** reverse proxy, and implemented API Key authentication and Role-Based Access Control (RBAC).

**Tech Stack:**

- **Languages:** Python, TypeScript, SQL
- **Frameworks:** FastAPI, Next.js, React, LangChain
- **AI/ML:** PyTorch, Transformers, MLflow, OpenAI API, PGVector
- **Infrastructure:** Docker, Docker Compose, PostgreSQL, MinIO (S3), Nginx
- **Tools:** Git, VS Code, Postman

**Impact:**
Delivered a fully functional, self-hosted AI platform capable of running local LLMs (Llama 3, Mistral) with enterprise-grade monitoring and evaluation capabilities, significantly reducing reliance on external paid APIs.
