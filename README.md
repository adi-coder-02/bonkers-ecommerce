# Ecommerce App

This is a full-stack ecommerce application with a React frontend and a Node.js/Express backend. The app supports user authentication, product browsing, cart management, order processing, and admin features.

## Project Structure

```
backend/
  controllers/        # Express controllers for business logic
  middleware/         # Custom Express middleware
  models/             # Mongoose models for MongoDB
  routes/             # Express route definitions
  package.json        # Backend dependencies and scripts
  server.js           # Entry point for backend server

frontend/
  public/             # Static assets
  src/
    components/       # Reusable React components
    context/          # React context providers
    images/           # Image assets
    pages/            # Page-level React components
  package.json        # Frontend dependencies and scripts
  vite.config.js      # Vite configuration
  index.html          # Main HTML file
```

## Features

- User registration and login
- JWT-based authentication
- Product listing and details
- Shopping cart and checkout
- Order history and details
- Admin dashboard for managing products, users, and orders
- Responsive UI with modern design

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or cloud instance)

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file for environment variables (e.g., MongoDB URI, JWT secret).
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Environment Variables
- Backend: Create a `.env` file in the `backend/` directory with the following variables:
  - `MONGO_URI` - MongoDB connection string
  - `JWT_SECRET` - Secret key for JWT
  - `PORT` - Port for backend server (default: 5000)
- Frontend: Update API endpoint URLs in the frontend as needed (e.g., in context or config files).

## Scripts
- **Backend**
  - `npm start` - Start the backend server
- **Frontend**
  - `npm run dev` - Start the frontend development server

## License
This project is licensed under the MIT License.
