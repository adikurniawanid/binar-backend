const { generateJWT, comparePassword, generateUUID } = require("../helpers");
const { isUsernameExists, sendEmail } = require("../services");
const { OAuth2Client } = require("google-auth-library");
require("dotenv").config();
const config = require("../../config/googleAuth.config");
const { sequelize, UserGame, UserGameBiodata } = require("../models");
const axios = require("axios");

const client = new OAuth2Client(
  config.GOOGLE_CLIENT_ID,
  config.GOOGLE_CLIENT_SECRET
);

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

  static async loginWithGoogle(req, res, next) {
    try {
      const token = await client.verifyIdToken({
        idToken: req.body.id_token,
        audience: config.GOOGLE_CLIENT_IDs,
      });

      const payload = token.getPayload();

      const user = await UserGame.findOne({
        where: {
          username: payload.email,
        },
      });

      if (user) {
        res.status(200).json({
          data: {
            token: await generateJWT(user.publicId, user.username),
          },
        });
      } else {
        const addUserTransaction = await sequelize.transaction();

        try {
          const user = await UserGame.create(
            {
              publicId: await generateUUID(),
              username: payload.email,
            },
            { transaction: addUserTransaction }
          );

          const userBiodata = await UserGameBiodata.create(
            {
              userId: user.id,
              name: payload.name,
            },
            { transaction: addUserTransaction }
          );

          await addUserTransaction.commit();

          await sendEmail(
            "welcomeChallenge08@mail.com",
            payload.email,
            "Akun berhasil didaftarkan",
            "Selamat datang di aplikasi challenge binar 08",
            "<p>Selamat datang di aplikasi challenge binar 08</p>"
          );

          res.status(200).json({
            data: {
              token: await generateJWT(user.publicId, user.username),
            },
          });
        } catch (error) {
          await addUserTransaction.rollback();
          next(error);
        }
      }
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

https: module.exports = LoginController;
