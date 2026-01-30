# app/models/patient.py
from sqlalchemy import Column, Integer
from app.models.base import Base

class Patient(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True, index=True)
    age = Column(Integer)
    prior_no_shows = Column(Integer, default=0)