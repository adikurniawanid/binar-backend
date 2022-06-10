const { sequelize, UserGame, UserGameBiodata } = require("../models");
const { hashPassword, generateUUID, comparePassword } = require("../helpers");
const {
  getUserList,
  getUserById,
  deleteUser,
  updateUser,
  getUserId,
  sendEmail,
  isUsernameExists,
} = require("../services");
const otpGenerator = require("otp-generator");

class UserController {
  static async list(req, res, next) {
    try {
      res.status(200).json({
        data: await getUserList(),
      });
    } catch (error) {
      next(error);
    }
  }

  static async get(req, res, next) {
    try {
      const user = await getUserById(req.params.id);
      if (user) {
        res.status(200).json({
          data: user,
        });
      } else {
        throw {
          status: 404,
          message: "User not found",
        };
      }
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    if (req.file) {
      req.body.video = `http://127.0.0.1:3000/videos/${req.file.filename}`;
    }

    const addUserTransaction = await sequelize.transaction();

    try {
      const user = await UserGame.create(
        {
          publicId: await generateUUID(),
          username: req.body.username,
          password: await hashPassword(req.body.password),
        },
        { transaction: addUserTransaction }
      );

      const userBiodata = await UserGameBiodata.create(
        {
          userId: user.id,
          name: req.body.name,
          age: req.body.age,
          videoUrl: req.body.video,
        },
        { transaction: addUserTransaction }
      );

      await addUserTransaction.commit();

      await sendEmail(
        "welcomeChallenge08@mail.com",
        user.username,
        "Akun berhasil didaftarkan",
        "Selamat datang di aplikasi challenge binar 08",
        "<p>Selamat datang di aplikasi challenge binar 08</p>"
      );
      res.status(200).json({
        message: "Success add user",
      });
    } catch (error) {
      await addUserTransaction.rollback();
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const user = await getUserById(req.params.id);

      if (user) {
        await updateUser(
          req.body.name,
          req.body.age,
          await getUserId(user.publicId)
        );
        res.status(200).json({
          message: "Success update user",
        });
      } else {
        throw {
          status: 404,
          message: "User not found",
        };
      }
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const user = await getUserById(req.params.id);

      if (user) {
        await deleteUser(user.publicId);

        res.status(200).json({
          message: "Success delete user",
        });
      } else {
        throw {
          status: 404,
          message: "User not found",
        };
      }
    } catch (error) {
      next(error);
    }
  }

  static async sendForgotPasswordToken(req, res, next) {
    try {
      const user = await isUsernameExists(req.body.username);

      if (!user) {
        throw {
          status: 404,
          message: "User not found",
        };
      } else {
        const otp = otpGenerator.generate(6, {
          upperCase: false,
          specialChars: false,
        });

        const otpHash = await hashPassword(otp);

        await UserGame.update(
          {
            forgot_pass_token: otpHash,
            forgot_pass_token_expired_at: new Date(
              new Date().getTime() + 5 * 60000
            ),
          },
          {
            where: {
              username: req.body.username,
            },
          }
        );

        const html = `<pre>
Token: ${otp}
Email ini otomatis dibuat pada ${new Date()}
          </pre>`;

        await sendEmail(
          "changePassword@mail.com",
          req.body.username,
          "Your Forgot Password Token",
          null,
          html
        );

        res.status(200).json({
          message: "Success send forgot password token",
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async verifyForgotPasswordToken(req, res, next) {
    try {
      const user = await UserGame.findOne({
        where: {
          username: req.body.username,
        },
      });

      if (await comparePassword(req.body.token, user.forgot_pass_token)) {
        if (user.forgot_pass_token_expired_at > new Date()) {
          res.status(200).json({
            valid: true,
            message: "Success verify forgot password token",
          });
        }
      } else {
        throw {
          status: 404,
          message: "Token not found",
        };
      }
    } catch (error) {
      next(error);
    }
  }

  static async changePassword(req, res, next) {
    try {
      if (req.body.password === req.body.confirmPassword) {
        const user = await UserGame.findOne({
          where: {
            username: req.body.username,
          },
        });

        if (user) {
          if (await comparePassword(req.body.token, user.forgot_pass_token)) {
            if (user.forgot_pass_token_expired_at > new Date()) {
              await UserGame.update(
                {
                  password: await hashPassword(req.body.password),
                  forgot_pass_token: null,
                  forgot_pass_token_expired_at: null,
                },
                {
                  where: {
                    username: req.body.username,
                  },
                }
              );
              res.status(200).json({
                message: "Success change password",
              });
            } else {
              throw {
                status: 404,
                message: "Token expired",
              };
            }
          } else {
            throw {
              status: 404,
              message: "Token not found",
            };
          }
        } else {
          throw {
            status: 404,
            message: "User not found",
          };
        }
      } else {
        throw {
          status: 404,
          message: "Password not match",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
