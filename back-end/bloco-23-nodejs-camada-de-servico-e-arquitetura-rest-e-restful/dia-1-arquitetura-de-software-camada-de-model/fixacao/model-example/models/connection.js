import mysql from 'mysql2/promise';

const connection = mysql.createPool({
	host: 'localhost',
	user: 'leobmend',
	password: 'leobmend@',
	database: 'model_example' }
);

export default connection;
