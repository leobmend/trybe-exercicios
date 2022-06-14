const UserSchema = (sequelize, DataTypes) => {
  const UserModel = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    admin: DataTypes.BOOLEAN,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  return UserModel;
};

module.exports = UserSchema;
