"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserGameHistory extends Model {
    static associate(models) {
      UserGameHistory.belongsTo(models.UserGame, {
        foreignKey: "userId",
      });
    }
  }
  UserGameHistory.init(
    {
      userId: DataTypes.INTEGER,
      startTime: DataTypes.DATE,
      end_time: DataTypes.DATE,
      score: DataTypes.BIGINT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserGameHistory",
    }
  );
  return UserGameHistory;
};
