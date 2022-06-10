const jwt = require("jsonwebtoken");
const config = require("../../config/jwt.config");

const generateJWT = async (publicIdParam, usernameParam) => {
  return await jwt.sign(
    { publicId: publicIdParam, username: usernameParam },
    config.JWT_SECRET_KEY
  );
};

module.exports = { generateJWT };
