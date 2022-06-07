'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'A História de Xablau Parte 1',
          author: 'Xablauzito',
          page_quantity: 500,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('books', null, {});
  }
};
