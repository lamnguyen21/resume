function validateInput(input) {
  if (!input.name) {
    return new ValidationError(-5);
  }
  else if (!input.jobTitle) {
    return new ValidationError(-6);
  }
  else if (!input.jobDesc) {
    return new ValidationError(-7);
  }
  else if (!input.curCompany) {
    return new ValidationError(-8);
  }
  else {
    return null;
  }
}

class ValidationError extends Error {
  constructor(...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }
  }
}

module.exports = {
  validateInput,
  ValidationError
}
