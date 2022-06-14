'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [
        {
          username: 'raulseixas',
          password: 'tocaraul',
          fullname: 'Raul Seixas',
          age: 65,
        },
        {
          username: 'cassiaeller',
          password: 'relicario',
          fullname: 'Cássia Eller',
          age: 57
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
