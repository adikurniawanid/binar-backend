const { UserGame, UserGameBiodata } = require("../models");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const getUserList = async (req, res, next) => {
  const users = await UserGame.findAll({
    attributes: ["publicId", "username"],
    where: {
      deletedAt: null,
    },
  });

  return res.status(200).json(users);
};

const getUserDetailById = async (req, res, next) => {
  try {
    const user = await UserGame.findOne({
      include: {
        model: UserGameBiodata,
        attributes: ["name", "age"],
      },
      where: {
        publicId: req.params.id,
        deletedAt: null,
      },
      attributes: ["publicId", "username"],
    });

    if (!user) {
      throw {
        status: 404,
        message: "User not found",
      };
    } else {
      return res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await UserGame.create({
      publicId: uuidv4(),
      username: req.body.username,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (!user) {
      throw {
        status: 404,
        message: "Failed add user",
      };
    } else {
      return res.status(200).json({ message: "Success add user" });
    }
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await UserGame.findOne({
      where: {
        publicId: req.params.id,
        deletedAt: null,
      },
      attributes: ["publicId"],
    });

    if (!user) {
      throw {
        status: 404,
        message: "User not found",
      };
    } else {
      await UserGame.update(
        { password: await bcrypt.hash(req.body.password, 10) },
        { where: { publicId: req.params.id } }
      );
      return res.status(200).json({ message: "Success update password user" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await UserGame.findOne({
      where: {
        publicId: req.params.id,
        deletedAt: null,
      },
      attributes: ["publicId"],
    });

    if (!user) {
      throw {
        status: 404,
        message: "User not found",
      };
    } else {
      await UserGame.update(
        { deletedAt: new Date() },
        { where: { publicId: req.params.id } }
      );
      return res.status(200).json({ message: "Success delete user" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserList,
  getUserDetailById,
  addUser,
  updateUser,
  deleteUser,
};
