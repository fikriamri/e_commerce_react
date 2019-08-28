#!/bin/bash

eval "$(ssh-agent -s)" &&

source ~/.profile
echo "$DOCKERHUB_PASS" | docker login --username $DOCKERHUB_USER --password-stdin
docker stop fikriamri/e-commerce-frontend:v.2
docker rm fikriamri/e-commerce-frontend:v.2
docker rmi fikriamri/e-commerce-frontend:v.2
docker run -d -p 3000:80 --name frontend fikriamri/e-commerce-frontend2:latest