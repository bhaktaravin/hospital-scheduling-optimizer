# app/models/staff.py
from sqlalchemy import Column, Integer, String, Time
from app.models.base import Base

class Staff(Base):
    __tablename__ = "staff"

    id = Column(Integer, primary_key=True)
    role = Column(String)  # doctor, nurse, technician
    shift_start = Column(Time)
    shift_end = Column(Time)