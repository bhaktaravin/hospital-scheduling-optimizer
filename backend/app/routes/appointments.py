from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db 
from app.schemas.appointment import AppointmentCreate, AppointmentResponse
from app.models.appointment import Appointment 


router = APIRouter(tags=["Appointment"])

@router.post("/", response_model=AppointmentResponse)
def create_appointment(appointment: AppointmentCreate, db: Session = Depends(get_db)):
    db_appointment = Appointment(**appointment.dict())
    db.add(db_appointment)
    db.commit() 
    db.refresh(db_appointment) 
    return db_appointment



@router.get("/{appointment_id}", response_model=AppointmentResponse)
def get_appointment(appointment_id: int, db: Session = Depends(get_db)):
    db_appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
    if not db_appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    return db_appointment

@router.delete("/{appointment_id}")
def delete_appointment(appointment_id: int, db: Session = Depends(get_db)):
    db_appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
    if not db_appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    db.delete(db_appointment)
    db.commit()
    return {"detail": "Appointment deleted successfully"}