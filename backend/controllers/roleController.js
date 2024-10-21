const { User, Role } = require('../models');

const roleController = {
  chooseRole: async (req, res) => {
    const { roleName } = req.body;  // Role name chosen by the user
    const { user } = req;  // The authenticated user from the token

    try {
      const role = await Role.findOne({ where: { name: roleName } });

      // Ensure the chosen role exists
      if (!role) {
        return res.status(400).json({ error: 'Invalid role selection' });
      }

      // Assign the role to the user
      await user.addRole(role);

      res.status(200).json({ message: `Role ${roleName} assigned successfully` });
    } catch (error) {
      res.status(400).json({ error: 'Error assigning role' });
    }
  },

  getUserRoles: async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await User.findByPk(userId, {
        include: [Role],  // Include associated roles
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user.Roles);  // Return the user's roles
    } catch (error) {
      res.status(400).json({ error: 'Error fetching user roles' });
    }
  }
};

module.exports = roleController;
