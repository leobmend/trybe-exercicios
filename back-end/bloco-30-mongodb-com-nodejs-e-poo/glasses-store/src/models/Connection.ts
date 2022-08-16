import mongoose, { ConnectOptions } from 'mongoose';

const {
  MONGO_URI,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_INITDB_DATABASE,
} = process.env;

const options: ConnectOptions = {
  user: MONGO_INITDB_ROOT_USERNAME,
  pass: MONGO_INITDB_ROOT_PASSWORD,
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: MONGO_INITDB_DATABASE,
};

const connectToDatabase = () => mongoose.connect(MONGO_URI as string, options);

export default connectToDatabase;