const { UserGame } = require("../models");

const getUserList = async () => {
  return await UserGame.findAll({
    attributes: ["publicId", "username"],
  });
};

module.exports = { getUserList };
