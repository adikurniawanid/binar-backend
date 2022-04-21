"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserGameBiodata extends Model {
    static associate(models) {
      UserGameBiodata.belongsTo(models.UserGame, {
        foreignKey: "userId",
      });
    }
  }
  UserGameBiodata.init(
    {
      userId: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      age: DataTypes.SMALLINT,
    },
    {
      sequelize,
      modelName: "UserGameBiodata",
      tableName: "UserGameBiodatas",
    }
  );
  return UserGameBiodata;
};
