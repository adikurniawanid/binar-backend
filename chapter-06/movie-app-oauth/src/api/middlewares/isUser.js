const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../../config/jwt.config");

const isUser = async (req, res, next) => {
  try {
    if (!req.user.roleId) {
      throw {
        status: 401,
        message: "Unauthorized User",
      };
    } else {
      if (req.user.roleId == 3) {
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

module.exports = { isUser };
