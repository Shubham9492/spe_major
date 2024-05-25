# eduConnect EdTech Platform

## Introduction

eduConnect is a comprehensive EdTech platform designed to facilitate learning by providing a wide range of educational content to students and enabling instructors to create and manage courses effectively. This repository contains the source code for the eduConnect platform.

## Architecture Overview

The eduConnect platform follows a client-server architecture, with the front-end serving as the client and the back-end and database serving as the server.

### Front-end

The front-end of the platform is built using ReactJS, providing dynamic and responsive user interfaces essential for an engaging learning experience. It communicates with the back-end through RESTful API calls.

#### Front End Pages

**For Students:**
- Homepage
- Course List
- Wishlist
- Cart Checkout
- Course Content
- User Details
- User Edit Details

**For Instructors:**
- Dashboard
- Insights
- Course Management Pages
- View and Edit Profile Details

#### Front-end Tools and Libraries

- ReactJS
- CSS
- Tailwind CSS
- Redux

### Back-end

The back-end of the platform is built using NodeJS and ExpressJS, offering APIs for the front-end to consume. It handles user authentication, course management, payment integration, and media management.

#### Back-end Features

- User Authentication and Authorization
- Course Management
- Payment Integration (Razorpay)
- Cloud-based Media Management (Cloudinary)

### Database

The database is built using MongoDB, providing a flexible and scalable data storage solution. It stores course content, user data, and other relevant information.

## Getting Started

To run the eduConnect platform locally, follow these steps:

1. Clone the repository to your local machine.
2. Install Docker, Ansible, and Jenkins.
3. Set up Docker Compose for container orchestration.
4. Configure environment variables for MongoDB, Razorpay, and Cloudinary.
5. Run the Docker Compose file to deploy the platform locally.

## Deployment

The eduConnect platform can be deployed using a Continuous Integration/Continuous Deployment (CI/CD) pipeline implemented with Jenkins. The pipeline automates the build, test, and deployment process, ensuring smooth updates to the platform.
