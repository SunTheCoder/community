const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken, checkRole } = require('../middleware/auth');
const { validateSignup, validateLogin } = require('../middleware/validation');

// Public routes (e.g., signup, login)
router.post('/signup', validateSignup, userController.signup);
router.post('/login', validateLogin, userController.login);

// Protected routes (e.g., get user data)
router.get('/', authenticateToken, userController.getUsers);

// Admin route for role management (role-based access control)
router.get('/admin', authenticateToken, checkRole('admin'), userController.adminDashboard);

module.exports = router;
