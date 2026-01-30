import { Calendar, TrendingUp, Clock, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <h2 className="card-title" style={{ marginBottom: '2rem' }}>
        Dashboard Overview
      </h2>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-label">Total Appointments</div>
              <div className="stat-value">247</div>
            </div>
            <div className="stat-icon">
              <Calendar size={24} style={{ color: '#2563eb' }} />
            </div>
          </div>
          <div className="stat-change positive">↑ 12% from last month</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-label">No-Show Rate</div>
              <div className="stat-value">8.3%</div>
            </div>
            <div className="stat-icon">
              <AlertCircle size={24} style={{ color: '#f59e0b' }} />
            </div>
          </div>
          <div className="stat-change positive">↓ 2.1% improvement</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-label">Avg Wait Time</div>
              <div className="stat-value">18m</div>
            </div>
            <div className="stat-icon">
              <Clock size={24} style={{ color: '#10b981' }} />
            </div>
          </div>
          <div className="stat-change positive">↓ 5min faster</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div>
              <div className="stat-label">Staff Utilization</div>
              <div className="stat-value">87%</div>
            </div>
            <div className="stat-icon">
              <TrendingUp size={24} style={{ color: '#8b5cf6' }} />
            </div>
          </div>
          <div className="stat-change positive">↑ 5% increase</div>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Recent Activity</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Patient</th>
                <th>Staff</th>
                <th>Status</th>
                <th>No-Show Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Today, 2:00 PM</td>
                <td>Patient #1234</td>
                <td>Dr. Smith</td>
                <td><span className="badge badge-success">Completed</span></td>
                <td>12%</td>
              </tr>
              <tr>
                <td>Today, 3:00 PM</td>
                <td>Patient #5678</td>
                <td>Dr. Johnson</td>
                <td><span className="badge badge-warning">In Progress</span></td>
                <td>45%</td>
              </tr>
              <tr>
                <td>Today, 4:00 PM</td>
                <td>Patient #9012</td>
                <td>Dr. Williams</td>
                <td><span className="badge badge-danger">High Risk</span></td>
                <td>78%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
