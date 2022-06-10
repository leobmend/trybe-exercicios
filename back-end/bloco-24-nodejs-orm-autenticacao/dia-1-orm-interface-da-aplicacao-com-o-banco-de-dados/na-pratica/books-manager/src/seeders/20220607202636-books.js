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
          publisher: 'Xablaus',
        },
        {
          title: 'A História de Xablau Parte 3',
          author: 'Xablauzera',
          page_quantity: 900,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          publisher: 'Xablaus',
        },
        {
          title: 'A História de Xablau Parte 2',
          author: 'Xablauzito Filho',
          page_quantity: 700,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          publisher: 'Xablaus',
        },
        {
          title: 'Lalaland',
          author: 'Xablauzera',
          page_quantity: 1000,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          publisher: 'Xablaus',
        },
        {
          title: 'A História de Xablau Parte 4',
          author: 'Xablauzera',
          page_quantity: 300,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          publisher: 'Xablaus',
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('books', null, {});
  }
};
