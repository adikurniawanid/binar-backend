const { UserGame } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../../config/jwt.config");

const authorization = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw {
        status: 401,
        message: "Unauthorized",
      };
    } else {
      const decoded = jwt.verify(
        req.headers.authorization,
        config.JWT_SECRET_KEY
      );
      const publicId = decoded.publicId;
      const username = decoded.username;
      const selectedUser = await UserGame.findOne({
        attributes: ["publicId", "username"],
        where: {
          username: username,
          publicId: publicId,
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

module.exports = { authorization };
