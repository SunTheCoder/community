const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
    signup: async (req, res) => {
        try {
          console.log('Request Body:', req.body); // Log the incoming request
          
          const { name, email, password} = req.body;
      console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
          // Check if all fields are provided
          if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
          }
      
          // Hash the password
          const hashedPassword = await bcrypt.hash(password, 10);
      
          // Create the user
          const newUser = await User.create({ name, email, password: hashedPassword});
      
          // Generate a JWT
          const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
          res.status(201).json({ token });
        } catch (err) {
          console.error('Error creating user:', err); // Log the error for debugging
          res.status(400).json({ error: 'Error creating user' });
        }
      },

      
      login: async (req, res) => {
        const { email, password } = req.body;
        console.log('Received email:', email, 'Received password:', password); // Logging to verify payload
    
        try {
          // Find the user by email
          const user = await User.findOne({ where: { email } });
    
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
    
          // Compare the password with the stored hashed password
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
          }
    
          // Generate a JWT token
          const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
          return res.status(200).json({ token, user: { id: user.id, email: user.email, name: user.name } });
        } catch (err) {
          return res.status(500).json({ error: 'Server error' });
        }
      },
      
      
      

  getUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      res.status(400).json({ error: 'Error fetching users' });
    }
  },

  adminDashboard: (req, res) => {
    res.json({ message: 'Welcome to the admin dashboard!' });
  },
};

module.exports = userController;
