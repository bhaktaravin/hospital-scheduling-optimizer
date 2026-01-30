from fastapi import FastAPI
from app.routes import appointments, predictions, optimization

app = FastAPI(title="Hospital Scheduling Optimizer")

app.include_router(appointments.router, prefix="/appointments")
app.include_router(predictions.router, prefix="/predict")
app.include_router(optimization.router, prefix="/optimize")