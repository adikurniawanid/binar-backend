const { generateJWT, comparePassword } = require("../../helpers");
const { isUsernameExists } = require("../../services");
const axios = require("axios");
const { OAuth2Client, IdTokenClient } = require("google-auth-library");
const googleAuthConfig = require("../../../config/googleAuth.config");

const { User } = require("../../models");

const client = new OAuth2Client(
  googleAuthConfig.GOOGLE_CLIENT_ID,
  googleAuthConfig.GOOGLE_CLIENT_SECRET
);

class LoginController {
  static async login(req, res, next) {
    try {
      if (req.body.username && req.body.password) {
        const user = await isUsernameExists(req.body.username);

        if (user) {
          if (await comparePassword(req.body.password, user.password)) {
            res.status(200).json({
              data: {
                token: await generateJWT(user.id, user.username),
              },
            });
          } else {
            throw {
              status: 401,
              message: "Invalid username or password",
            };
          }
        }
      } else if (req.body.google_id_token) {
        const payload = await client.verifyIdToken({
          idToken: req.body.google_id_token,
          audience: googleAuthConfig.GOOGLE_CLIENT_ID,
        });
        // res.status(200).json(payload.payload);

        const user = await User.findOne({
          where: {
            username: payload.payload.email,
          },
        });

        if (user) {
          res.status(200).json({
            data: {
              token: await generateJWT(user.id, user.username),
            },
          });
        } else {
          const createdUser = await User.create({
            username: payload.payload.email,
          });
          res.status(200).json({
            data: {
              token: await generateJWT(createdUser.id, createdUser.username),
            },
          });
        }
      } else if (req.body.facebook_id_token) {
        const response = await axios.get(
          `https://graph.facebook.com/v12.0/me?fields=id%2Cname%2Cemail%2Cgender%2Cbirthday&access_token=${req.body.facebook_id_token}`
        );

        const user = await User.findOne({
          where: {
            username: response.data.id,
          },
        });

        if (user) {
          console.log("user", user);
          res.status(200).json({
            data: {
              token: await generateJWT(user.id, user.username),
            },
          });
        } else {
          const createdUser = await User.create({
            username: response.data.id,
          });

          res.status(200).json({
            data: {
              token: await generateJWT(createdUser.id, createdUser.username),
            },
          });
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
