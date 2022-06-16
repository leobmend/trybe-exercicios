module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [
        {
          id: 1,
          username: 'Leonardo Mendonca',
          password: 'admin123',
          admin: 1,
        },
        {
          id: 2,
          username: 'Raul Seixas',
          password: 'tocaraul',
          admin: 0,
        },
        {
          id: 3,
          username: 'Cássia Eller',
          password: 'relicario',
          admin: 0,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
