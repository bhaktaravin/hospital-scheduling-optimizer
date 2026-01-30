# 🏥 Hospital Scheduling Optimizer

> An intelligent hospital appointment scheduling system with ML-powered no-show prediction and optimization algorithms

[![FastAPI](https://img.shields.io/badge/FastAPI-0.105.0-009688.svg?style=flat&logo=FastAPI&logoColor=white)](https://fastapi.tiangolo.com)
[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg?style=flat&logo=python&logoColor=white)](https://www.python.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13+-316192.svg?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org)
[![OR-Tools](https://img.shields.io/badge/OR--Tools-9.15-orange.svg)](https://developers.google.com/optimization)

---

## 🎯 Project Overview

**Hospital Scheduling Optimizer** is an end-to-end system combining **machine learning** and **operations research** to optimize healthcare appointment scheduling. It predicts patient no-shows and generates optimal schedules that maximize resource utilization while minimizing patient wait times.

### Why This Project?

Healthcare facilities lose **$150 billion annually** due to missed appointments. This system addresses that by:
- Predicting no-shows before they happen
- Optimally overbooking based on risk profiles
- Balancing staff workload and room utilization
- Reducing patient wait times through intelligent scheduling

### 🎬 Demo

- **Live API Docs**: [http://localhost:8000/docs](http://localhost:8000/docs) (when running locally)
- **Architecture**: Modern FastAPI backend with PostgreSQL database
- **ML Pipeline**: Feature engineering → Model training → Real-time predictions

---

## ✨ Key Features

### 🤖 ML-Powered Predictions
- **No-Show Probability**: Random Forest/XGBoost models predict appointment no-show likelihood
- **Feature Engineering**: Time-based, patient history, and behavioral features
- **Model Evaluation**: ROC-AUC, precision-recall metrics for healthcare decision-making

### 📊 Optimization Engine
- **Constraint Programming**: OR-Tools for optimal schedule generation
- **Multi-Objective**: Minimize idle time, maximize utilization, respect staff limits
- **Dynamic Scheduling**: Adjusts for predicted no-shows and real-time changes

### 🔌 RESTful API
- **CRUD Operations**: Manage appointments, patients, staff, and rooms
- **Real-time Predictions**: On-demand no-show probability calculations
- **Schedule Generation**: Automated optimal schedule creation
- **Interactive Docs**: Swagger/OpenAPI documentation built-in

---

## 🛠 Tech Stack

| Category               | Technologies                                    |
|------------------------|-------------------------------------------------|
| **Backend**            | FastAPI, Python 3.14, Uvicorn                   |
| **Database**           | PostgreSQL (Neon serverless), SQLAlchemy ORM    |
| **ML/Data Science**    | scikit-learn, NumPy, pandas, joblib             |
| **Optimization**       | Google OR-Tools (constraint programming)        |
| **API**                | Pydantic validation, async endpoints            |
| **Development**        | Python virtual environments, pip                |

---

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Applications                      │
│              (API Consumers / Future Frontend)               │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ HTTP/REST
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    FastAPI Backend                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Appointments│  │  Predictions │  │ Optimization │      │
│  │    Routes    │  │    Routes    │  │    Routes    │      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
│         │                  │                  │               │
│         ▼                  ▼                  ▼               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Database   │  │  ML Service  │  │Optimization  │      │
│  │   Service    │  │              │  │   Service    │      │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │
└─────────┼──────────────────┼──────────────────┼─────────────┘
          │                  │                  │
          ▼                  ▼                  │
┌──────────────────┐  ┌──────────────────┐    │
│   PostgreSQL     │  │   ML Model       │    │
│   Database       │  │  (Random Forest) │    │
│                  │  │  no_show.pkl     │    │
└──────────────────┘  └──────────────────┘    │
                                               ▼
                                        ┌──────────────┐
                                        │  OR-Tools    │
                                        │  Optimizer   │
                                        └──────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- Python 3.9+ (tested with Python 3.14)
- PostgreSQL database (or use [Neon](https://neon.tech) serverless Postgres)
- pip package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/hospital-scheduling-optimizer.git
cd hospital-scheduling-optimizer
```

2. **Create and activate virtual environment**
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Configure environment variables**
```bash
cp .env.example .env
# Edit .env with your database URL and settings
```

Example `.env`:
```env
DATABASE_URL=postgresql://user:password@localhost/hospital_db
APP_NAME=Hospital Scheduling Optimization
DEBUG=True
SECRET_KEY=your-secret-key-here
```

5. **Run the application**
```bash
cd backend
uvicorn app.main:app --reload
```

6. **Access the API**
- API Base: `http://localhost:8000`
- Interactive Docs: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

---

## 📡 API Endpoints

### Appointments
- `POST /appointments/` - Create new appointment
- `GET /appointments/{id}` - Get appointment details
- `DELETE /appointments/{id}` - Delete appointment

### Predictions
- `POST /predict/{appointment_id}` - Predict no-show probability for appointment

### Optimization
- `POST /optimize/schedule` - Generate optimized schedule

View full API documentation at `/docs` when running the server.

---

## 🧠 Machine Learning Pipeline

### Feature Engineering
```python
# Key features used for prediction
- days_until_appointment: Lead time in days
- day_of_week: 0-6 (Monday-Sunday)
- hour_of_day: 0-23
- patient_age: Patient age in years
- prior_no_shows: Historical no-show count
- appointment_type: Type of medical visit
```

### Model Training (Future Enhancement)
```bash
# Train a new model with your data
python scripts/train_model.py --data data/appointments.csv
```

### Current Implementation
- Mock predictions for development (until model is trained)
- Lazy loading to avoid startup errors
- Easy model swap via `models/no_show_model.pkl`

---

## 🎯 Future Enhancements

- [ ] React dashboard for visualization
- [ ] Real-time schedule updates via WebSocket
- [ ] Multi-facility support
- [ ] SMS/Email notifications for appointments
- [ ] Model retraining pipeline
- [ ] A/B testing framework for scheduling strategies
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Unit and integration tests

---

## 📊 Project Highlights for Portfolio

### Technical Skills Demonstrated
✅ **Backend Development**: RESTful API with FastAPI  
✅ **Database Design**: SQLAlchemy ORM, PostgreSQL  
✅ **Machine Learning**: Feature engineering, model deployment  
✅ **Operations Research**: Constraint programming with OR-Tools  
✅ **Software Architecture**: Modular, scalable design patterns  
✅ **API Documentation**: OpenAPI/Swagger integration  
✅ **Environment Management**: Configuration with Pydantic  

### Problem-Solving
- Addressed a $150B industry problem (appointment no-shows)
- Combined ML and optimization for intelligent decision-making
- Designed for real-world healthcare constraints

### Code Quality
- Type hints throughout
- Separation of concerns (routes, services, models, schemas)
- Environment-based configuration
- Error handling and validation

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

---

## 🙏 Acknowledgments

- FastAPI for the excellent web framework
- Google OR-Tools for optimization capabilities
- scikit-learn for machine learning tools
- Neon for serverless PostgreSQL

---

**⭐ If you found this project helpful, please consider giving it a star!**