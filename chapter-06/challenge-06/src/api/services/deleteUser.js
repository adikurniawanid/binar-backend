const { UserGame } = require("../models");

const deleteUser = async (publicIdParam) => {
  await UserGame.destroy({
    where: {
      publicId: publicIdParam,
    },
  });
};

module.exports = { deleteUser };
