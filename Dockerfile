FROM nginx:stable
MAINTAINER "famri@alterra.id"

RUN mkdir -p /alterra/www/fikriamri.xyz
RUN mkdir -p /alterra/logs/nginx

COPY default.conf /etc/nginx/conf.d/
COPY . /alterra/www/fikriamri.xyz/

WORKDIR /alterra/www/fikriamri.xyz
