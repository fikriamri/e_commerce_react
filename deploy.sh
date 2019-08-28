#!/bin/bash

sudo docker stop frontend
sudo docker rm frontend
sudo docker rmi fikriamri/e-commerce-frontend:v.2
sudo docker run -d -p 3000:80 --name frontend fikriamri/e-commerce-frontend:v.2