from datetime import timedelta

def optimize_schedule(appointments):
    """
    Simple heuristic optimizer:
    - Push high no-show probability appointments earlier
    """
    sorted_appts = sorted(
        appointments,
        key=lambda a: a.no_show_probability or 0,
        reverse=True
    )

    optimized = []
    current_time = sorted_appts[0].start_time

    for appt in sorted_appts:
        optimized.append({
            "appointment_id": appt.id,
            "new_start_time": current_time,
            "staff_id": appt.staff_id,
            "room_id": appt.room_id
        })
        current_time += timedelta(minutes=appt.duration_minutes)

    return optimized