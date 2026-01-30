# app/models/appointment.py
from sqlalchemy import Column, Integer, DateTime, Float, ForeignKey
from sqlalchemy.orm import relationship
from app.models.base import Base

class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id"))
    staff_id = Column(Integer, ForeignKey("staff.id"))
    room_id = Column(Integer, ForeignKey("rooms.id"))

    start_time = Column(DateTime, nullable=False)
    duration_minutes = Column(Integer, default=30)

    no_show_probability = Column(Float)

    patient = relationship("Patient")
    staff = relationship("Staff")