const UserSchema = (sequelize, DataTypes) => {
  const UserModel = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  return UserModel;
};

module.exports = UserSchema;
