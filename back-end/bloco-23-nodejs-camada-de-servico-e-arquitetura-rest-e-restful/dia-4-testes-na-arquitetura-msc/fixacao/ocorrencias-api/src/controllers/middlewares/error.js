const error = (err, _req, res, _next) => {
  console.log(error);
  res.status(500).json({ message: err.message });
};

module.exports = error;
