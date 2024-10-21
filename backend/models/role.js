'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // Define associations here
      Role.belongsToMany(models.User, {
        through: 'UserRoles',  // Junction table for many-to-many relationship
        foreignKey: 'role_id',
      });
    }
  }

  Role.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,  // Ensure role names are unique
    },
  }, {
    sequelize,
    modelName: 'Role',
  });

  return Role;
};
