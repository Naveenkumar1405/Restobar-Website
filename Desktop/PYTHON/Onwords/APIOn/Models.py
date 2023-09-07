from pydantic import BaseModel
    
class guest_Login(BaseModel):
    email: str
    password: str
    owner_email: str   

class CreateUser(BaseModel):
    email: str
    password: str

class CreateGuest(BaseModel):
    email: str
    password: str
    owner_email: str

class Login(BaseModel):
    email: str
    password: str
    user_role: str 

class guest_Login(BaseModel):
    email: str
    password: str
    owner_email: str

 