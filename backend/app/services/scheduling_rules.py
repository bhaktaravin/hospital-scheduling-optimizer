def is_within_shift(staff, start_time):
    return staff.shift_start <= start_time.time() <= staff.shift_end