module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'books',
      'publisher',
      { type: Sequelize.STRING, allowNull: false },
    );

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'books',
      'publisher',
    );
  },
}