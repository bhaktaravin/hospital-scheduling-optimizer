import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Calendar, Users, Activity, TrendingUp } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Appointments from './components/Appointments';
import CreateAppointment from './components/CreateAppointment';
import './App.css';

const queryClient = new QueryClient();

type Tab = 'dashboard' | 'appointments' | 'create';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <div className="logo">
              <Activity className="logo-icon" />
              <h1>Hospital Scheduler</h1>
            </div>
            <nav className="nav">
              <button
                className={`nav-button ${activeTab === 'dashboard' ? 'active' : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <TrendingUp size={18} />
                Dashboard
              </button>
              <button
                className={`nav-button ${activeTab === 'appointments' ? 'active' : ''}`}
                onClick={() => setActiveTab('appointments')}
              >
                <Calendar size={18} />
                Appointments
              </button>
              <button
                className={`nav-button ${activeTab === 'create' ? 'active' : ''}`}
                onClick={() => setActiveTab('create')}
              >
                <Users size={18} />
                New Appointment
              </button>
            </nav>
          </div>
        </header>

        <main className="main">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'appointments' && <Appointments />}
          {activeTab === 'create' && <CreateAppointment />}
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
