'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        password: 'hashedpassword1', // You would hash this in a real scenario
        bio: 'Loves gardening and hiking.',
        role: 'mentor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bob Smith',
        email: 'bob@example.com',
        password: 'hashedpassword2',
        bio: 'A passionate chef.',
        role: 'chef',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

