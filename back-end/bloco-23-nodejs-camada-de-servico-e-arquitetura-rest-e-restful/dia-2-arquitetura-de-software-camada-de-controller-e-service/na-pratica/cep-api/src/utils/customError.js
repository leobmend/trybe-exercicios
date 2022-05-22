class CustomError extends Error {
  constructor(code, status, message) {
    super();
    this.code = code;
    this.status = status;
    this.message = message;
  }
}

module.exports = CustomError;
