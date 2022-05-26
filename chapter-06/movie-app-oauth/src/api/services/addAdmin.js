const { User } = require("../models");
const { hashPassword } = require("../helpers");

const addAdmin = async (usernameParam, passwordParam) => {
  await User.create({
    username: usernameParam,
    password: await hashPassword(passwordParam),
    roleId: 2,
  });
};

module.exports = { addAdmin };
