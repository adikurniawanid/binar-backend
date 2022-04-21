const { sequelize, UserGame, UserGameBiodata } = require("../models");
const { hashPassword, generateUUID } = require("../helpers");
const {
  getUserList,
  getUserById,
  deleteUser,
  updateUser,
  getUserId,
} = require("../services");

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
        },
        { transaction: addUserTransaction }
      );

      await addUserTransaction.commit();
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
}

module.exports = UserController;
