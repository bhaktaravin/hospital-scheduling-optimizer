import { useState } from 'react';
import { Plus } from 'lucide-react';

const CreateAppointment = () => {
  const [formData, setFormData] = useState({
    patient_id: '',
    staff_id: '',
    room_id: '',
    start_time: '',
    duration_minutes: '30',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating appointment:', formData);
    // API call will be added here
    alert('Appointment created! (Mock - connect to backend)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="card-title" style={{ marginBottom: '2rem' }}>
        Create New Appointment
      </h2>

      <div className="card" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Patient ID</label>
            <input
              type="number"
              name="patient_id"
              className="form-input"
              placeholder="Enter patient ID"
              value={formData.patient_id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Staff ID</label>
            <input
              type="number"
              name="staff_id"
              className="form-input"
              placeholder="Enter staff ID"
              value={formData.staff_id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Room ID</label>
            <input
              type="number"
              name="room_id"
              className="form-input"
              placeholder="Enter room ID"
              value={formData.room_id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Start Time</label>
            <input
              type="datetime-local"
              name="start_time"
              className="form-input"
              value={formData.start_time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Duration (minutes)</label>
            <select
              name="duration_minutes"
              className="form-input"
              value={formData.duration_minutes}
              onChange={handleChange}
              required
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">1 hour</option>
              <option value="90">1.5 hours</option>
              <option value="120">2 hours</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            <Plus size={18} />
            Create Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAppointment;
