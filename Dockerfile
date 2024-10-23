FROM node:22.7.0

WORKDIR /var/www/html

COPY . .

RUN npm install -g pnpm

ENTRYPOINT [ "/var/www/html/afterbuild.sh" ]
