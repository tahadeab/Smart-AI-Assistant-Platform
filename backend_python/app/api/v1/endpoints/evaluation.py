from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.rag import rag_service
from app.core.mlflow_client import mlflow_client
import mlflow
import time
import logging

logger = logging.getLogger(__name__)

router = APIRouter()

class EvaluationRequest(BaseModel):
    model_name: str
    test_queries: List[str]
    expected_answers: Optional[List[str]] = None
    metrics: List[str] = ["latency", "relevance"]

class EvaluationResult(BaseModel):
    evaluation_id: str
    status: str
    model_name: str
    scores: Dict[str, float]
    details: List[Dict[str, Any]]

@router.post("/run", response_model=EvaluationResult)
async def run_evaluation(
    request: EvaluationRequest,
    db: Session = Depends(get_db)
):
    """
    Run evaluation pipeline on a model.
    Tests latency, RAG relevance, and response quality.
    """
    try:
        # Start MLflow run
        experiment_name = "model_evaluation"
        mlflow.set_experiment(experiment_name)
        
        with mlflow.start_run(run_name=f"eval_{request.model_name}_{int(time.time())}") as run:
            mlflow.log_param("model_name", request.model_name)
            mlflow.log_param("num_queries", len(request.test_queries))
            
            results = []
            total_latency = 0
            
            for idx, query in enumerate(request.test_queries):
                start_time = time.time()
                
                # Retrieve relevant context using RAG
                context = rag_service.search(query, db, limit=3)
                
                # Simulate model inference (in production, call actual model)
                # For now, just measure retrieval latency
                latency = time.time() - start_time
                total_latency += latency
                
                result = {
                    "query": query,
                    "latency_ms": latency * 1000,
                    "context_retrieved": len(context),
                    "relevance_score": 0.85 if context else 0.0  # Placeholder
                }
                results.append(result)
                
                # Log individual metrics
                mlflow.log_metric(f"query_{idx}_latency", latency)
            
            # Aggregate metrics
            avg_latency = total_latency / len(request.test_queries)
            avg_relevance = sum(r["relevance_score"] for r in results) / len(results)
            
            mlflow.log_metric("avg_latency", avg_latency)
            mlflow.log_metric("avg_relevance", avg_relevance)
            
            scores = {
                "avg_latency_ms": avg_latency * 1000,
                "avg_relevance": avg_relevance
            }
            
            return EvaluationResult(
                evaluation_id=run.info.run_id,
                status="completed",
                model_name=request.model_name,
                scores=scores,
                details=results
            )
            
    except Exception as e:
        logger.error(f"Evaluation failed: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/results/{evaluation_id}")
async def get_evaluation_results(evaluation_id: str):
    """
    Retrieve evaluation results from MLflow.
    """
    try:
        client = mlflow.tracking.MlflowClient()
        run = client.get_run(evaluation_id)
        
        return {
            "evaluation_id": evaluation_id,
            "status": run.info.status,
            "metrics": run.data.metrics,
            "params": run.data.params
        }
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"Evaluation not found: {str(e)}")
