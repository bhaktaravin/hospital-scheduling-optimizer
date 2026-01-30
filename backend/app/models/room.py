# app/models/room.py
from sqlalchemy import Column, Integer, String
from app.models.base import Base

class Room(Base):
    __tablename__ = "rooms"

    id = Column(Integer, primary_key=True)
    room_type = Column(String)  # exam, imaging, surgery