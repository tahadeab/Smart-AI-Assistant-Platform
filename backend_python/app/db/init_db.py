from app.db.base import Base
from app.db.session import engine
from app.models.agent import Agent
from app.models.document import DocumentChunk

def init_db():
    Base.metadata.create_all(bind=engine)
