const { UserGame, UserGameBiodata } = require("../models");

const getUserById = async (publicIdParam) => {
  const user = await UserGame.findOne({
    attributes: ["publicId", "username"],
    where: {
      publicId: publicIdParam,
    },
    include: {
      model: UserGameBiodata,
      attributes: ["name", "age"],
    },
  });

  if (user == null) {
    return null;
  }

  return {
    publicId: user.publicId,
    username: user.username,
    name: user.UserGameBiodatum.name,
    age: user.UserGameBiodatum.age,
  };
};

module.exports = { getUserById };
