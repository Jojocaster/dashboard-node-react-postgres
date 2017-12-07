# Dashboard - Node/React

## Introduction

> React Dashboard connected to Express and Postgres

## Installation

Run this command in both root and /app
> yarn install

Create database
> createdb dashboard-dev

## Run

To run the server, go to the root and run
> npm run start:dev

To run the react app, go to /app and run
> yarn start

## More
To generate a new model, just type: 
> sequelize model:create --name MODEL_NAME --attributes title:string,content:string ...

Once the model has been generated, don't forget to run migrations afterwards
> sequelize db:migrate