const error = (err, _req, res, _next) => {
  res.status(err.status || 500).json({ error: { message: err.message } });
};

module.exports = error;
