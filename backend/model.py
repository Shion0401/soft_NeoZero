from sqlalchemy import Column, Integer, String
from pydantic import BaseModel
from database import Base, ENGINE


# テーブル定義
class UserInformationTable(Base):
    __tablename__ = 'user_information'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(30), nullable=False)
    email = Column(String(128), nullable=False)
    password = Column(String(64), nullable=False)

# モデル定義 
class RegisterUser(BaseModel):
    name: str
    email: str
    password: str

class LoginUser(BaseModel):
    email: str
    password: str

def main():
    Base.metadata.create_all(bind=ENGINE)

if __name__ == "__main__":
    main()

