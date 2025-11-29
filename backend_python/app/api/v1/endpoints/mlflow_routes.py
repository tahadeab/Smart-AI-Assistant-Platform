from fastapi import APIRouter
from app.core.config import settings
import mlflow

router = APIRouter()

@router.get("/status")
def get_mlflow_status():
    """
    Check connection to MLflow server.
    """
    try:
        mlflow.set_tracking_uri(settings.MLFLOW_TRACKING_URI)
        client = mlflow.tracking.MlflowClient()
        experiments = client.search_experiments()
        return {
            "status": "connected",
            "tracking_uri": settings.MLFLOW_TRACKING_URI,
            "experiment_count": len(experiments)
        }
    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }
