const jwt = require("jsonwebtoken");
const config = require("../../config/jwt.config");

const generateJWT = async (idParam, usernameParam) => {
  return await jwt.sign(
    { id: idParam, username: usernameParam },
    config.JWT_SECRET_KEY
  );
};

module.exports = { generateJWT };
