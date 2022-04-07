const { UserGame } = require("../models");
const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
  try {
    const user = await UserGame.findAll({
      attributes: ["publicId", "username", "password"],
      where: {
        username: req.body.username,
        deletedAt: null,
      },
    });
    if (
      user.length === 0 ||
      !user ||
      !bcrypt.compareSync(req.body.password, user[0].password)
    ) {
      throw {
        status: 401,
        message: "Invalid username or password",
      };
    } else {
      return res.status(200).json(`${user[0].publicId}:${user[0].username}`);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
