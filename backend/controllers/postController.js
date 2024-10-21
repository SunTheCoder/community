const { Post } = require('../models');

const postController = {
  createPost: async (req, res) => {
    const { content } = req.body;
    const { user } = req; // The authenticated user from the token

    try {
      const newPost = await Post.create({
        user_id: user.id,
        content
      });

      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ error: 'Error creating post' });
    }
  },

  getPosts: async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.json(posts);
    } catch (error) {
      res.status(400).json({ error: 'Error fetching posts' });
    }
  },

  updatePost: async (req, res) => {
    const { postId } = req.params;
    const { content } = req.body;

    try {
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      // Ensure the user updating the post is the one who created it
      if (post.user_id !== req.user.id) {
        return res.status(403).json({ error: 'Unauthorized' });
      }

      post.content = content;
      await post.save();
      res.json(post);
    } catch (error) {
      res.status(400).json({ error: 'Error updating post' });
    }
  },

  deletePost: async (req, res) => {
    const { postId } = req.params;

    try {
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      // Ensure the user deleting the post is the one who created it
      if (post.user_id !== req.user.id) {
        return res.status(403).json({ error: 'Unauthorized' });
      }

      await post.destroy();
      res.json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Error deleting post' });
    }
  }
};

module.exports = postController;
