import joblib
import os
from pathlib import Path

MODEL_PATH = "models/no_show_model.pkl"

_model = None

def _load_model():
    """Lazy load the ML model."""
    global _model
    if _model is None:
        if os.path.exists(MODEL_PATH):
            _model = joblib.load(MODEL_PATH)
        else:
            # Return a mock model if file doesn't exist (for development)
            print(f"Warning: Model file {MODEL_PATH} not found. Using mock predictions.")
            _model = "mock"
    return _model

def predict_no_show(features: dict) -> float:
    """
    Returns probability of no-show (0–1)
    """
    model = _load_model()
    
    if model == "mock":
        # Return a random-like prediction for development
        return 0.3 + (hash(str(features)) % 100) / 200.0
    
    X = [[
        features.get("age", 0),
        features.get("prior_no_shows", 0),
        features.get("hour", 12)
    ]]
    return float(model.predict_proba(X)[0][1])