from fastapi import FastAPI
from database import session
from model import UserInformationTable, RegisterUser, LoginUser
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 必要に応じて許可するドメインを制限
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


#　ユーザー情報一覧取得
@app.get("/users")
def get_user_list():
    users = session.query(UserInformationTable).all()
    return users


# ユーザー情報取得(id指定)
@app.get("/users/{user_id}")
def get_user(user_id: int):
    user = session.query(UserInformationTable).\
        filter(UserInformationTable.id == user_id).first()
    return user

# ユーザ情報登録
@app.post("/users/register")
def post_user(user: RegisterUser):
    db_test_user = UserInformationTable(name=user.name, 
                                        email=user.email, password=user.password)
    session.add(db_test_user)
    session.commit()
    
# ユーザログイン
@app.post("/users/login")
def post_user(user: LoginUser):
    get_login_user = session.query(UserInformationTable).\
        filter((UserInformationTable.email == user.email) &
               (UserInformationTable.password == user.password)).first()
    if get_login_user:
        return get_login_user.id  # ユーザーが見つかった場合、IDを返す
    else:
        return None


# ユーザ情報更新
# @app.put("/users/{user_id}")
# def put_users(user: TestUser, user_id: int):
#     target_user = session.query(UserInformationTable).\
#         filter(UserInformationTable.id == user_id).first()
#     target_user.name = user.name
#     target_user.email = user.email
#     session.commit()










# # get:読み取り, post:作成, put:更新, delete:削除とか
# # HTTP GETリクエストがルート（"/"）に送信されたときに呼び出される関数を定義

    
# @app.get("/mypage")
# async def test():
#     return {"message": 1000}


# @app.get("/")
# async def root():
#     rand = random.randint(50, 100)
#     return {"message": rand}