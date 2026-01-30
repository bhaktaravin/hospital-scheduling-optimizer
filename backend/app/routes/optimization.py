from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from datetime import date
from app.database import get_db
from app.services.optimization_service import optimize_schedule
from app.models.appointment import Appointment

router = APIRouter(tags=["Optimization"])


@router.post("/daily")
def optimize_daily_schedule(
    schedule_date: date,
    db: Session = Depends(get_db)
):
    appointments = (
        db.query(Appointment)
        .filter(Appointment.start_time.cast(date) == schedule_date)
        .all()
    )

    optimized = optimize_schedule(appointments)

    return {
        "date": schedule_date,
        "optimized_schedule": optimized
    }