import rescue from "express-rescue";

const salesVerification = rescue(function(req, _res, next) {
  const { productName, infos } = req.body;

  if (!productName) {
    const error = new Error("A productName wasn't provided");
    error.status = 400;
    throw error;
  }
  if (productName.length < 4) {
    const error = new Error('The productName has to be a minimum of 4 letters');
    error.status = 400;
    throw error;
  }

  if (!infos) {
    const error = new Error("The infos object wasn't provided");
    error.status = 400;
    throw error;    
  }
  if (!infos.saleDate || !infos.warrantyPeriod) {
    const error = new Error('The infos object provided is not complete');
    error.status = 400;
    throw error;  
  }

  const day = parseInt(infos.saleDate.split('/')[0]);
  const dayCheck = day <= 31 && day >= 0;

  const month = parseInt(infos.saleDate.split('/')[1]);
  const monthCheck = month <= 12 && month >= 0;

  const yearString = infos.saleDate.split('/')[2] || '';
  const yearCheck = yearString.length === 4 && typeof parseInt(yearString) === 'number';

  if (!day || !month || !dayCheck || !monthCheck || !yearCheck) {
    const error = new Error("The saleDate it's not in dd/mm/yyyy format");
    error.status = 400;
    throw error;
  }

  if (!infos.warrantyPeriod) {
    const error = new Error("The warrantyPeriod wasn't provided");
    error.status = 400;
    throw error;
  }

  if (![1, 2, 3].includes(infos.warrantyPeriod)) {
    const error = new Error('The warrantyPeriod has to be between 1 and 3');
    error.status = 400;
    throw error;
  }

  next();
});

const signupVerification = rescue(function(req, _res, next) {
  const { email, password, firstName, phone } = req.body;
  
  console.log(firstName)
  if (!email || !password || !firstName || !phone) {
    const error = new Error('Missing fields');
    error.status = 400;
    throw error;
  }

  next();
});

export { salesVerification, signupVerification };
