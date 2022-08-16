import 'dotenv/config';
import mongoose, { ConnectOptions } from 'mongoose';

const {
  MONGO_URI,
  MONGO_AUTHSOURCE,
  MONGO_ROOT_USERNAME,
  MONGO_ROOT_PASSWORD,
  MONGO_DATABASE,
} = process.env;

const options: ConnectOptions = {
  authSource: MONGO_AUTHSOURCE,
  user: MONGO_ROOT_USERNAME,
  pass: MONGO_ROOT_PASSWORD, 
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: MONGO_DATABASE,
};

const connectToDatabase = () => mongoose.connect(MONGO_URI as string, options);

export default connectToDatabase;