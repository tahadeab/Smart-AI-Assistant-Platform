import mlflow
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

class MLflowClient:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(MLflowClient, cls).__new__(cls)
            cls._instance._initialized = False
        return cls._instance

    def __init__(self):
        if self._initialized:
            return
        
        self.tracking_uri = settings.MLFLOW_TRACKING_URI
        try:
            mlflow.set_tracking_uri(self.tracking_uri)
            logger.info(f"MLflow tracking URI set to: {self.tracking_uri}")
        except Exception as e:
            logger.error(f"Failed to set MLflow tracking URI: {e}")
        
        self._initialized = True

    def log_param(self, run_id: str, key: str, value: any):
        try:
            with mlflow.start_run(run_id=run_id, nested=True):
                mlflow.log_param(key, value)
        except Exception as e:
            logger.error(f"Error logging param to MLflow: {e}")

    def log_metric(self, run_id: str, key: str, value: float):
        try:
            with mlflow.start_run(run_id=run_id, nested=True):
                mlflow.log_metric(key, value)
        except Exception as e:
            logger.error(f"Error logging metric to MLflow: {e}")

mlflow_client = MLflowClient()
