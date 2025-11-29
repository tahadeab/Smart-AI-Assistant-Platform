from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from pgvector.sqlalchemy import Vector
from app.db.base import Base

class DocumentChunk(Base):
    __tablename__ = "document_chunks"

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String, index=True)
    content = Column(Text)
    embedding = Column(Vector(384))  # 384 dim for all-MiniLM-L6-v2
    created_at = Column(DateTime(timezone=True), server_default=func.now())
