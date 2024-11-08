# Pythonイメージをベースに
FROM python:3.9

# 作業ディレクトリを設定
WORKDIR /app

# 必要なパッケージをインストール
COPY ./backend/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# アプリケーションのコードをコピー
COPY ./backend /app

# サーバーを起動
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
