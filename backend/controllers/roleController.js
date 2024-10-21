const { Role } = require('../models');

const roleController = {
  createRole: async (req, res) => {
    const { name } = req.body;

    try {
      const newRole = await Role.create({ name });
      res.status(201).json(newRole);
    } catch (error) {
      res.status(400).json({ error: 'Error creating role' });
    }
  },

  getRoles: async (req, res) => {
    try {
      const roles = await Role.findAll();
      res.json(roles);
    } catch (error) {
      res.status(400).json({ error: 'Error fetching roles' });
    }
  }
};

module.exports = roleController;
