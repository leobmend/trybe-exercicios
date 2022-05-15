import crypto from 'crypto';

const generateToken = () => {
  return crypto.randomBytes(8).toString('hex');
};

export default generateToken;
