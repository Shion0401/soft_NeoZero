# # Node.jsイメージをベースに
# FROM node:18.18.0

# # 作業ディレクトリを設定
# WORKDIR /app

# # パッケージのインストール
# COPY ./frontend/package.json ./frontend/package.json ./
# RUN npm install

# # アプリケーションのコードをコピー
# COPY ./frontend /app

# # 開発サーバーを起動
# CMD ["npm", "run", "dev"]

FROM node:18

WORKDIR /app

COPY ./frontend/package.json ./frontend/package.json ./
RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm", "start"]
