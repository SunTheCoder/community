const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken, checkRole } = require('../middleware/auth');

// Public routes (e.g., signup, login)
router.post('/signup', userController.signup);
router.post('/login', userController.login);

// Protected routes (e.g., get user data)
router.get('/', authenticateToken, userController.getUsers);

// Admin route for role management (role-based access control)
router.get('/admin', authenticateToken, checkRole('admin'), userController.adminDashboard);

module.exports = router;
