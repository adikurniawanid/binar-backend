const { authorization } = require("./authenticator");
const { errorHandling } = require("./errorHandler");
const { isSuperAdmin } = require("./isSuperAdmin");
const { isAdmin } = require("./isAdmin");
const { isUser } = require("./isUser");
const { isAdminSuperAdmin } = require("./isAdminSuperAdmin");
// const { validate } = require("./validator");

module.exports = {
  authorization,
  errorHandling,
  isSuperAdmin,
  isAdmin,
  isUser,
  isAdminSuperAdmin,
};
