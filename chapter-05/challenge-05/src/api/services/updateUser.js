const { UserGameBiodata } = require("../models");

const updateUser = async (nameParam, ageParam, userIdParam) => {
  await UserGameBiodata.update(
    {
      name: nameParam,
      age: ageParam,
    },
    {
      where: {
        userId: userIdParam,
      },
    }
  );
};

module.exports = { updateUser };
