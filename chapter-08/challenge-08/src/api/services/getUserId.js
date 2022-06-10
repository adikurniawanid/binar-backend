const { UserGame } = require("../models");

const getUserId = async (publicIdParam) => {
  const result = await UserGame.findOne({
    attributes: ["id"],
    where: {
      publicId: publicIdParam,
    },
  });

  return result.id;
};

module.exports = { getUserId };
