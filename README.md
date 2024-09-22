# Car Rental System

This project is a Car Rental System built using MongoDB and Express.js that allows users to rent cars while managing car inventory, customer details, and rental transactions.

## Features

MongoDB Models

Car:

-    Fields: name, model, rental status (available/rented).

Customer:

-    Fields: name, password, email, phone number.

Rental:

-    References to both Car and Customer.

Fields: rental date, return date.


# API Functionalities

User APIs

-    Signup: Register a new user.

-    Sign In: Authenticate users.

-    Get Specific User: Retrieve information for a specific user.

-    Get All Users: Retrieve a list of all users.

-    Update User: Update user information (owner only).

-    Delete User: Remove user account (owner only).


Car APIs

-    Add Car: Add a new car to the inventory.

-    Get Specific Car: Retrieve details of a specific car.

-    Get All Cars: List all cars in the inventory.

-    Update Car: Modify car details.

-    Delete Car: Remove a car from the inventory.


Rental APIs

-    Create Rental: Initiate a rental transaction.

-    Update Rental: Modify rental details.

-    Delete Rental: Remove a rental transaction.

-    Get All Rentals: List all rental transactions.

-    Get Specific Rental: Retrieve details of a specific rental.


# Special APIs

Filter Cars:

-    Get all cars whose model is ‘Honda’ or ‘Toyota’.

-    Get available cars of a specific model.

-    Get cars that are either rented or of a specific model.

-    Get available cars of specific models or rented cars of a specific model.


# Unique Constraints

When a car is rented, it is marked as rented and cannot be rented again until it is returned.

# Installation

Clone the repository:

git clone https://github.com/yourusername/car-rental-system.git


Install dependencies:

npm install

Configure your MongoDB connection in the environment variables or a config file.

Start the application:

npm start

Future Improvements

-    Implement a frontend interface for enhanced user experience.

-    Add advanced search and filter capabilities.

-    Enhance security features, such as JWT authentication for user sessions.

# Testing

Use tools like Postman to test the API endpoints thoroughly.


<!-- 
    !Postman Documentation Link
        https://documenter.getpostman.com/view/32857096/2sA3XLFQJ1
    
    ! Github Code Link 
    https://github.com/ahmedeid-dev/carRentalSystem
