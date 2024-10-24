FROM node:22.7.0

WORKDIR /app

COPY . .

RUN chmod -R 777 /app

RUN npm install -g pnpm

ENTRYPOINT [ "/app/afterbuild.sh" ]
