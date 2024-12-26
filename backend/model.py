from sqlalchemy import Column, Integer, String
from pydantic import BaseModel
from database import Base, ENGINE


# テーブル定義
class UserTable(Base):
    __tablename__ = 'user_table'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(10), nullable=False)
    email = Column(String(30), nullable=False)
    password = Column(String(64), nullable=False)
    comment = Column(String(100), nullable=False)
    
# モデル定義 
class RegisterUser(BaseModel):
    name: str
    email: str
    password: str
    comment: str
    
class LoginUser(BaseModel):
    email: str
    password: str



