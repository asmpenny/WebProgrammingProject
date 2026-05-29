# Sweet Treats Store - Full Stack Web Application

## Overview
This project is a full stack e-commerce module built using Node.js, Express.js, MongoDB Atlas, and Mongoose. It demonstrates CRUD operations for a product-based store and includes a simple frontend interface to display product data.

This application was developed as part of a team project to demonstrate backend API development, database integration, and basic automated testing.

## Features
- RESTful API using Express.js
- MongoDB Atlas database integration
- Full CRUD operations:
  - GET /products
  - POST /products
  - PUT /products/:id
  - DELETE /products/:id
- Frontend HTML page displaying product list
- Automated test for GET /products endpoint
- Test automation script (automate.js)

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript (ES6)
- HTML/CSS
- Thunder Client (for API testing)

## API Endpoints

### GET all products

GET /products


### Create product

POST /products


### Update product

PUT /products/:id


### Delete product

DELETE /products/:id


## Sample Product JSON

json
{
  "storeId": 1,
  "storeName": "Sweet Treats",
  "productId": 101,
  "productName": "Shark Cookies (6pk)",
  "price": 4.99
}


## Testing

### Run automated test (GET /products only)

node tests/products.test.js


### Run full automation script

node tests/automate.js


## Project Structure

SweetTreatsStore/
│
├── models/
│   ├── db.js
│   └── products.js
│
├── server/
│   └── server.js
│
├── public/
│   └── index.html
│
├── tests/
│   ├── products.test.js
│   └── automate.js
│
├── .env
├── package.json
└── README.md


## How to Run the Project

1. Install dependencies:

npm install


2. Start the server:

node server/server.js


3. Open in browser:

http://localhost:3000


## Disclaimer
This project is for educational purposes only. It is not a real commercial application.

## Author
Student Project – Web Programming Course
Alana Penny - student #: 041272184