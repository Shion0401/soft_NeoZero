## いるもの
- Windows
    - WSL 
    - Docker Desktop for Linux(多分)
- Mac
    - Docker Desktop for Mac

## gitからクローンしよう
1. リポジトリをクローン
   ```WSLのterminal
   git clone https://github.com/Shion0401/soft_NeoZero.git
2. lsするとsoft_NeoZeroっていうディレクトリができてるはず

## dockerを使おう
1. いいかんじにアカウントを作る
2. soft_NeoZeroのディレクトリ（docker_compose.ymlがあるところ）にいって下記を実行
    ```WSLのterminal
   docker compose up -d build

## できたものを見てみよう
- ブラウザでアクセスする
    - 実際のサイト：localhost:3000/login
    - FastAPIのやつ：localhost:8000/docs