from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.agent import Agent
import logging

logger = logging.getLogger(__name__)

router = APIRouter()

class AgentCreate(BaseModel):
    name: str
    description: Optional[str] = None
    system_prompt: str
    model_config: dict  # {"model": "llama3", "temperature": 0.7}

class AgentResponse(BaseModel):
    id: int
    name: str
    description: Optional[str]
    system_prompt: str
    model_config: dict
    is_active: bool

    class Config:
        from_attributes = True

@router.post("/", response_model=AgentResponse)
async def create_agent(agent: AgentCreate, db: Session = Depends(get_db)):
    """
    Create a new AI agent with custom configuration.
    """
    try:
        db_agent = Agent(
            name=agent.name,
            description=agent.description,
            system_prompt=agent.system_prompt,
            model_config=agent.model_config,
            is_active=True
        )
        db.add(db_agent)
        db.commit()
        db.refresh(db_agent)
        
        return db_agent
    except Exception as e:
        db.rollback()
        logger.error(f"Error creating agent: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/", response_model=List[AgentResponse])
async def list_agents(db: Session = Depends(get_db)):
    """
    List all active agents.
    """
    agents = db.query(Agent).filter(Agent.is_active == True).all()
    return agents

@router.get("/{agent_id}", response_model=AgentResponse)
async def get_agent(agent_id: int, db: Session = Depends(get_db)):
    """
    Get a specific agent by ID.
    """
    agent = db.query(Agent).filter(Agent.id == agent_id).first()
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    return agent

@router.delete("/{agent_id}")
async def delete_agent(agent_id: int, db: Session = Depends(get_db)):
    """
    Soft delete an agent (set is_active to False).
    """
    agent = db.query(Agent).filter(Agent.id == agent_id).first()
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    
    agent.is_active = False
    db.commit()
    
    return {"message": f"Agent {agent_id} deactivated successfully"}
