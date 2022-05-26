const { User } = require("../models");

const isUsernameExists = async (usernameParam) => {
  return await User.findOne({
    where: {
      username: usernameParam,
    },
  });
};

module.exports = { isUsernameExists };
