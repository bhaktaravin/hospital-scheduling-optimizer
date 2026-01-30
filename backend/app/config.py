from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    # App
    APP_NAME: str = "Hospital Scheduling Optimization"
    ENV: str = "development"
    DEBUG: bool = True

    # Database
    DATABASE_URL: str

    # Optimization knobs
    MAX_DAILY_HOURS_PER_STAFF: int = 8
    MIN_BUFFER_MINUTES: int = 10
    NO_SHOW_RISK_THRESHOLD: float = 0.6

    # ML
    NO_SHOW_MODEL_PATH: str = "models/no_show.pkl"

    # Security (future-proofing)
    SECRET_KEY: str = "dev-secret"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings():
    return Settings()