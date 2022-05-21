const error = (error, _req, res, _next) => {
  res.status(error.status || 500).json({
    error: true,
    message: error.message,
  })
};

module.exports = error;
