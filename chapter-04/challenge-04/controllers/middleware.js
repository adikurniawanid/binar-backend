const { UserGame } = require("../models");

const authorization = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw {
        status: 401,
        message: "Unauthorized",
      };
    } else {
      const id = req.headers.authorization.split(":")[0];
      const username = req.headers.authorization.split(":")[1];

      const selectedUser = await UserGame.findOne({
        attributes: ["publicId", "username"],
        where: {
          username: username,
          publicId: id,
          deletedAt: null,
        },
      });

      if (selectedUser) {
        req.user = selectedUser;
        next();
      } else {
        throw {
          status: 401,
          message: "Unauthorized User",
        };
      }
    }
  } catch (error) {
    next(error);
  }
};

const errorHandling = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { authorization, errorHandling };
