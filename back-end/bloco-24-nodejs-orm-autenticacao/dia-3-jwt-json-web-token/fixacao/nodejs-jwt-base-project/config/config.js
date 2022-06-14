require('dotenv').config();

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_TYPE,
};

module.exports = {
  development: {
    ...config,
    database: 'jwt_exercise_dev',
  },
  test: {
    ...config,
    database: 'jwt_exercise_test',
  },
  production: {
    ...config,
    database: 'jwt_exercise',
  },
};
