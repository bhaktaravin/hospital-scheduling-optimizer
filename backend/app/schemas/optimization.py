from pydantic import BaseModel
from datetime import datetime
from typing import List

class OptimizedSlot(BaseModel):
    appointment_id: int
    new_start_time: datetime
    staff_id: int
    room_id: int

class OptimizationResponse(BaseModel):
    date: str
    optimized_schedule: List[OptimizedSlot]