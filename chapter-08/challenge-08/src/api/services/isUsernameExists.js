const { UserGame } = require("../models");

const isUsernameExists = async (usernameParam) => {
  return await UserGame.findOne({
    where: {
      username: usernameParam,
    },
  });
};

module.exports = { isUsernameExists };
