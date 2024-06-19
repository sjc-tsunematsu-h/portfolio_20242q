## 環境構築手順

1. `git clone`にて本リポジトリをローカルに取得する
2. `docker-compose.yml.sample`ファイルを`docker-compose.yml`にリネームする(必要があればファイル内のIPを任意のものに変更)
3. 本リポジトリのルートディレクトリでdockerのbuildを行う
```bash
pwd # /hogehoge/app/portfolio
docker-compose build
```
4. コンテナを起動してからコンテナ内で`prisma`のmigrateを実行
```bash
docker-compose up -d
docker-compose exec front sh

npx prisma dev --name init
```
5. `http://127.0.0.1:8080`にアクセスしてページが表示されることを確認
