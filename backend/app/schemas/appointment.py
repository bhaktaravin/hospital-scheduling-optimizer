from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class AppointmentCreate(BaseModel):
    patient_id: int
    staff_id: int
    room_id: int
    start_time: datetime
    duration_minutes: int = 30

class AppointmentResponse(AppointmentCreate):
    id: int
    no_show_probability: Optional[float]

    class Config:
        from_attributes = True