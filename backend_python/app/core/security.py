from fastapi import Security, HTTPException, status
from fastapi.security import APIKeyHeader
from app.core.config import settings

api_key_header = APIKeyHeader(name="X-API-Key", auto_error=False)

async def get_api_key(api_key_header: str = Security(api_key_header)):
    """
    Validate API Key. 
    In production, check against a database or environment variable.
    """
    # For now, we accept any key if not configured, or a specific one if configured
    # This is a placeholder. Real implementation should check DB.
    if not api_key_header:
         raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
        )
    return api_key_header
