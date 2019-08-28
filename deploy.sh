#!/bin/bash

sudo docker stop fikriamri/e-commerce-frontend:v.2
sudo docker rm fikriamri/e-commerce-frontend:v.2
sudo docker rmi fikriamri/e-commerce-frontend:v.2
sudo docker run -d -p 3000:80 --name frontend fikriamri/e-commerce-frontend:v.2