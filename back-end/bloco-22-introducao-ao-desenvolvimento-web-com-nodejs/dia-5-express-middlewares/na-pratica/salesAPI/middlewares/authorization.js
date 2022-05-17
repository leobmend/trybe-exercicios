import rescue from "express-rescue";

const authorizationCheck = rescue(function(req, _res, next) {
  const { authorization: token } = req.headers;
  console.log(token)
  if (!token) {
    const error = new Error("A token wasn't provided");
    error.status = 401;
    throw error;
  }

  if (token.length != 16) {
    const error = new Error('Invalid token');
    error.status = 401;
    throw error;
  }

  next();
});

export default authorizationCheck;