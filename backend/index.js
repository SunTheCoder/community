const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const roleRoutes = require('./routes/role');
const cors = require('cors');

dotenv.config(); // Load environment variables from .env file



const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());
// Root route (for testing)
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
  });
  app.get('/', (req, res) => {
  res.send('Welcome to the Community App!');
});



// Routes for users
app.use('/users', userRoutes); // User routes will be available at /users
app.use('/posts', postRoutes);  // Add posts routes
app.use('/roles', roleRoutes);  // Add roles routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
