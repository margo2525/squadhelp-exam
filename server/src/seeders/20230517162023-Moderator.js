const bcrypt = require('bcrypt');
const { MODERATOR, SALT_ROUNDS } = require('../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'moderatorfn',
          lastName: 'moderatorln',
          displayName: 'moderatordn',
          password: bcrypt.hashSync('1234567', SALT_ROUNDS),
          email: 'moderator@gmail.com',
          role: MODERATOR,
        },
      ],
      // eslint-disable-next-line comma-dangle
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
