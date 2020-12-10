'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkDelete('users', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        firstName: 'Kelsey',
        lastName: 'Whallon',
        email: 'kwhallon@gmail.com',
        password: bcrypt.hashSync('password', 12),
        isInstructor: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Shelby',
        lastName: 'Whallon',
        email: 'swhallon@gmail.com',
        password: bcrypt.hashSync('password', 12),
        isInstructor: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ryan',
        lastName: 'Whallon',
        email: 'rwhallon@gmail.com',
        password: bcrypt.hashSync('password', 12),
        isInstructor: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Vicki',
        lastName: 'Lynn',
        email: 'vlynn@gmail.com',
        password: bcrypt.hashSync('password', 12),
        isInstructor: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Mark',
        lastName: 'Curtis',
        email: 'mcurtis@gmail.com',
        password: bcrypt.hashSync('password', 12),
        isInstructor: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jeff',
        lastName: 'Brewer',
        email: 'jbrew@gmail.com',
        password: bcrypt.hashSync('password', 12),
        isInstructor: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], { returning: true })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
