FROM node:18.17
WORKDIR /app/

RUN apt-get update && apt-get install -y expect

# パッケージインストールのためのコマンド追加
COPY ./package.json ./yarn.lock ./
RUN yarn install --frozen-lockfile
# 全ファイルをコピー
COPY ./ ./
RUN npm install prisma --save-dev
RUN npm install promise-mysql

# build終了後containerに入って実行するコマンド
# npx prisma migrate dev --name init

CMD [ "yarn", "build" ]