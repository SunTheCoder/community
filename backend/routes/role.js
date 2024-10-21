const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const { authenticateToken, checkRole } = require('../middleware/auth');

// Create a new role (admin only)
router.post('/', authenticateToken, checkRole('admin'), roleController.createRole);

// Get all roles
router.get('/', roleController.getRoles);

module.exports = router;
