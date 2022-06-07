const error = (err, _req, res, _next) => {
  res.status(err.status || 500).json({
    message: err.status ? err.message : `Something went wrong: ${err.message}`,
  });
};

module.exports = error;
