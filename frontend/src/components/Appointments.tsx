import { Calendar, Trash2 } from 'lucide-react';

const Appointments = () => {
  return (
    <div>
      <h2 className="card-title" style={{ marginBottom: '2rem' }}>
        Appointments
      </h2>

      <div className="card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Staff</th>
                <th>Date & Time</th>
                <th>Duration</th>
                <th>No-Show Risk</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>Patient #1234</td>
                <td>Dr. Smith</td>
                <td>Jan 30, 2026 10:00 AM</td>
                <td>30 min</td>
                <td><span className="badge badge-success">12%</span></td>
                <td>
                  <button className="btn btn-danger" style={{ padding: '0.5rem' }}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Patient #5678</td>
                <td>Dr. Johnson</td>
                <td>Jan 30, 2026 11:00 AM</td>
                <td>45 min</td>
                <td><span className="badge badge-warning">45%</span></td>
                <td>
                  <button className="btn btn-danger" style={{ padding: '0.5rem' }}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>#003</td>
                <td>Patient #9012</td>
                <td>Dr. Williams</td>
                <td>Jan 30, 2026 2:00 PM</td>
                <td>60 min</td>
                <td><span className="badge badge-danger">78%</span></td>
                <td>
                  <button className="btn btn-danger" style={{ padding: '0.5rem' }}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="empty-state" style={{ display: 'none' }}>
          <Calendar size={48} className="empty-state-icon" />
          <p>No appointments scheduled</p>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
