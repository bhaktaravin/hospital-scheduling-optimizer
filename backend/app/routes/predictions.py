from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.appointment import Appointment
from app.services.ml_service import predict_no_show
from app.utils.feature_engineering import build_features

router = APIRouter(tags=["Predictions"])


@router.post("/{appointment_id}")
def predict_no_show_probability(
    appointment_id: int,
    db: Session = Depends(get_db)
):
    appt = db.query(Appointment).filter(Appointment.id == appointment_id).first()
    if not appt:
        raise HTTPException(status_code=404, detail="Appointment not found")

    features = build_features(appt)
    probability = predict_no_show(features)

    appt.no_show_prob = probability
    db.commit()

    return {
        "appointment_id": appointment_id,
        "no_show_probability": round(probability, 3)
    }