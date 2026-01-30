import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Appointment {
  id: number;
  patient_id: number;
  staff_id: number;
  room_id: number;
  start_time: string;
  duration_minutes: number;
  no_show_probability?: number;
}

export interface CreateAppointmentDTO {
  patient_id: number;
  staff_id: number;
  room_id: number;
  start_time: string;
  duration_minutes: number;
}

export const appointmentAPI = {
  getAll: () => api.get<Appointment[]>('/appointments/'),
  getById: (id: number) => api.get<Appointment>(`/appointments/${id}`),
  create: (data: CreateAppointmentDTO) => api.post<Appointment>('/appointments/', data),
  delete: (id: number) => api.delete(`/appointments/${id}`),
  predictNoShow: (id: number) => api.post(`/predict/${id}`),
};
