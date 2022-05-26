const { User } = require("../models");
const { hashPassword } = require("../helpers");

const addUser = async (usernameParam, passwordParam) => {
  await User.create({
    username: usernameParam,
    password: await hashPassword(passwordParam),
    roleId: 3,
  });
};

module.exports = { addUser };
