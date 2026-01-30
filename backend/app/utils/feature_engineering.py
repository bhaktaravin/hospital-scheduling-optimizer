"""Feature engineering utilities for ML predictions."""
from datetime import datetime
from app.models.appointment import Appointment


def build_features(appointment: Appointment) -> dict:
    """
    Build feature dictionary from an appointment for ML prediction.
    
    Args:
        appointment: Appointment model instance
        
    Returns:
        Dictionary with features for no-show prediction
    """
    now = datetime.now()
    
    # Calculate days until appointment
    days_until = (appointment.scheduled_time - now).days if appointment.scheduled_time > now else 0
    
    # Extract temporal features
    day_of_week = appointment.scheduled_time.weekday()
    hour_of_day = appointment.scheduled_time.hour
    
    features = {
        "days_until_appointment": days_until,
        "day_of_week": day_of_week,
        "hour_of_day": hour_of_day,
        "patient_id": appointment.patient_id,
        "staff_id": appointment.staff_id if hasattr(appointment, 'staff_id') else None,
        "room_id": appointment.room_id if hasattr(appointment, 'room_id') else None,
    }
    
    return features
