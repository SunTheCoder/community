const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { authenticateToken } = require('../middleware/auth');

// Create a new post (protected)
router.post('/', authenticateToken, postController.createPost);

// Get all posts
router.get('/', postController.getPosts);

// Update a post (protected)
router.put('/:postId', authenticateToken, postController.updatePost);

// Delete a post (protected)
router.delete('/:postId', authenticateToken, postController.deletePost);

module.exports = router;
