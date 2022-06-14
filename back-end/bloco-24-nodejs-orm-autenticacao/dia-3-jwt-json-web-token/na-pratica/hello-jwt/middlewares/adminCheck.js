const rescue = require('express-rescue');

const adminCheck = rescue((req, _res, next) => {
  const { admin: isAdmin } = req.tokenData;

  if (!isAdmin) throw { status: 403, message: 'Restricted access' };

  next();
});

module.exports = adminCheck;