const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Root route (for testing)
app.get('/', (req, res) => {
  res.send('Welcome to the Community App!');
});

// Routes for users
app.use('/users', userRoutes); // User routes will be available at /users

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
