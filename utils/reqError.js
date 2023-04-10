class AppError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

class BadRequestError extends AppError {
  constructor(message) {
    super(400, message);
  }
}

class UnauthorizedError extends AppError {
  constructor(message) {
    super(401, message);
  }
}
