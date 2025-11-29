from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1.endpoints import inference, mlflow_routes, ingest, evaluation, agents
from app.db.init_db import init_db

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

@app.on_event("startup")
def on_startup():
    init_db()

# Set all CORS enabled origins
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(inference.router, prefix=f"{settings.API_V1_STR}/inference", tags=["inference"])
app.include_router(mlflow_routes.router, prefix=f"{settings.API_V1_STR}/mlflow", tags=["mlflow"])
app.include_router(ingest.router, prefix=f"{settings.API_V1_STR}/ingest", tags=["ingest"])
app.include_router(evaluation.router, prefix=f"{settings.API_V1_STR}/evaluation", tags=["evaluation"])
app.include_router(agents.router, prefix=f"{settings.API_V1_STR}/agents", tags=["agents"])

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "ai-engine"}
