require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');



const app = express();

// Middleware
// Allow frontend origin(s). Can be configured via CLIENT_ORIGINS env (comma-separated).
const allowedOrigins = process.env.CLIENT_ORIGINS
  ? process.env.CLIENT_ORIGINS.split(',')
  : [
      'https://bonkers-ecommerce-1.onrender.com',
      'https://bonkers-ecommerce.onrender.com',
    ];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));


// Routes placeholder
app.get('/', (req, res) => {
  res.send('Coffee E-commerce Backend is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
