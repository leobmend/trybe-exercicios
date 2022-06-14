
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const UsersTable = queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      admin: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });

    return UsersTable;
  },
  down: async (queryInterface, Sequelize) => queryInterface.dropTable("Users"),
};
