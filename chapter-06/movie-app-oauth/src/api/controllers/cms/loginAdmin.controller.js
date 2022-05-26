const { generateJWT, comparePassword } = require("../../helpers");
const { isUsernameExists } = require("../../services");

class LoginAdminController {
  static async login(req, res, next) {
    try {
      if (req.body.username && req.body.password) {
        const user = await isUsernameExists(req.body.username);

        if (user) {
          if (user.roleId == 1 || user.roleId == 2) {
            if (await comparePassword(req.body.password, user.password)) {
              res.status(200).json({
                data: {
                  token: await generateJWT(user.id, user.username),
                },
              });
            }
          } else {
            throw {
              status: 401,
              message: "Invalid username or password for admin",
            };
          }
        }
      } else {
        throw {
          status: 401,
          message: "Invalid username or password for admin",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LoginAdminController;
