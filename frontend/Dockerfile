# Node.jsイメージをベースに
FROM node:18.18.0

# 作業ディレクトリを設定
WORKDIR /app

# パッケージのインストール
COPY ./frontend/package.json ./frontend/package.json ./
RUN npm install

# アプリケーションのコードをコピー
COPY ./frontend /app

# 開発サーバーを起動
CMD ["npm", "run", "dev"]
