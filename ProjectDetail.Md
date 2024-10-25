# Allahabad University Artwork Ecommerce Project

This project is an e-commerce platform for art, including paintings, sculptures, and drawings. It is built using the MERN stack (MongoDB, Express, React, Node.js) along with Tailwind CSS and Material-UI for styling. The frontend is developed using Vite for a modern and fast development experience.

## Project Structure

The project is divided into two main folders:

- **frontend**: Contains the client-side code.
- **backend**: Contains the server-side code.

## Getting Started

To get started with the project, follow the instructions below for both the backend and frontend.

### Backend Setup

1. Navigate to the backend directory:
   cd backend

2. Install the required dependencies:
    npm install

3. Create a .env file in the backend directory with the following fields:

    MONGODB_URI=<your_mongodb_connection_string>
    GOOGLE_CLIENT_ID=<your_google_client_id>
    GOOGLE_CLIENT_SECRET=<your_google_client_secret>
    JWT_SECRET=<your_jwt_secret>
    JWT_REFRESH_SECRET=<your_jwt_refresh_secret>
    ACCESS_TOKEN_SECRET=<your_access_token_secret>
    REFRESH_TOKEN_SECRET=<your_refresh_token_secret>

4. Start the backend server 
    node index.js or npm start (if nodemon install)


### Frontend Setup

1. Navigate to the frontend directory:
    cd frontend

2. Install the required dependencies:
    npm install

3. Start the frontend development server:
    npm run dev
