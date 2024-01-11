FROM nginx:alpine

WORKDIR /app

COPY static /static
COPY ./check-outbound.sh check-outbound.sh

COPY ./nginx.conf /etc/nginx/nginx.conf