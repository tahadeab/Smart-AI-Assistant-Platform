# MLflow Integration Guide

## Overview

MLflow is integrated into the AI Engine to track experiments, log metrics, and manage model versions.

## Architecture

- **Tracking Server**: Runs on port `5000`
- **Backend Store**: PostgreSQL (`mlflow` database)
- **Artifact Store**: MinIO (S3-compatible)

## Using MLflow

### 1. Accessing the UI

Open <http://localhost:5000> to view:

- Experiments
- Runs
- Metrics & Parameters
- Artifacts (model files, plots)

### 2. Logging from Code

#### Example: Log a Training Run

```python
import mlflow

mlflow.set_tracking_uri("http://localhost:5000")
mlflow.set_experiment("my_experiment")

with mlflow.start_run(run_name="training_v1"):
    # Log parameters
    mlflow.log_param("learning_rate", 0.001)
    mlflow.log_param("batch_size", 32)

    # Log metrics
    mlflow.log_metric("accuracy", 0.95)
    mlflow.log_metric("loss", 0.05)

    # Log artifacts (files)
    mlflow.log_artifact("model.pth")
```

#### Example: Log Evaluation Results

The evaluation endpoint (`/v1/evaluation/run`) automatically logs to MLflow:

- Query latency
- Relevance scores
- Model parameters

### 3. Model Registry

#### Register a Model

```python
mlflow.register_model(
    model_uri="runs:/<run_id>/model",
    name="llama3-finetuned"
)
```

#### Promote to Production

```python
client = mlflow.tracking.MlflowClient()
client.transition_model_version_stage(
    name="llama3-finetuned",
    version=1,
    stage="Production"
)
```

### 4. Comparing Experiments

1. Go to MLflow UI.
2. Select multiple runs.
3. Click "Compare" to see side-by-side metrics.

### 5. Best Practices

- **Naming**: Use descriptive experiment and run names.
- **Tagging**: Add tags to runs for easy filtering (e.g., `env:prod`, `model:llama3`).
- **Artifacts**: Log model checkpoints, plots, and config files.

## Troubleshooting

**Problem**: MLflow UI shows "No experiments found".

- **Solution**: Create an experiment first using `mlflow.set_experiment()`.

**Problem**: Artifacts not uploading to MinIO.

- **Solution**: Check MinIO credentials in `docker-compose.yml` and ensure the bucket exists.
