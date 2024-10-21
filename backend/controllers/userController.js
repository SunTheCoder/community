const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
  signup: async (req, res) => {
    try {
      const { name, email, password, bio, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({ name, email, password: hashedPassword, bio, role });
      const token = jwt.sign({ id: newUser.id, email: newUser.email, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(201).json({ token });
    } catch (err) {
      res.status(400).json({ error: 'Error creating user' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(200).json({ token });
    } catch (err) {
      res.status(400).json({ error: 'Error logging in' });
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
