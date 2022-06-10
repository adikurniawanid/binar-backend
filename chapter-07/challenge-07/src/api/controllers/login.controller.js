const { generateJWT, comparePassword } = require("../helpers");
const { isUsernameExists } = require("../services");
require("dotenv").config();

class LoginController {
  static async login(req, res, next) {
    try {
      const user = await isUsernameExists(req.body.username);

      if (user) {
        if (await comparePassword(req.body.password, user.password)) {
          res.status(200).json({
            data: {
              token: await generateJWT(user.publicId, user.username),
            },
          });
        } else {
          throw {
            status: 401,
            message: "Invalid username or password",
          };
        }
      } else {
        throw {
          status: 401,
          message: "Invalid username or password",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LoginController;
