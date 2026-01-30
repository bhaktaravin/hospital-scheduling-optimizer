from pydantic import BaseModel

class PatientBase(BaseModel):
    age: int
    prior_no_shows: int

class PatientResponse(PatientBase):
    id: int

    class Config:
        from_attributes = True