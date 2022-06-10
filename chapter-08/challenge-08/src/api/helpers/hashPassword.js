const bcrypt = require("bcrypt");
const config = require("../../config/bcrypt.config");

const hashPassword = async (passwordParam) => {
  return await bcrypt.hash(passwordParam, Number(config.BCRYPT_SALT));
};

module.exports = { hashPassword };
