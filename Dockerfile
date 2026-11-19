FROM nginx:1.31-alpine

WORKDIR /app

COPY ./static static/

COPY ./nginx.conf /etc/nginx/nginx.conf