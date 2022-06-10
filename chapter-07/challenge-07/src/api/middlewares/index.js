const { authorization } = require("./authenticator");
const { errorHandling } = require("./errorHandler");
const { validate } = require("./validator");

module.exports = {
  authorization,
  errorHandling,
  validate,
};
