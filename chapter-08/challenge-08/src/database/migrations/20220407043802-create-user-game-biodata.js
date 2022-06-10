"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserGameBiodatas", {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "UserGames",
          key: "id",
        },
        onUpdate: "restrict",
        onDelete: "restrict",
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.SMALLINT,
      },
      videoUrl: {
        type: Sequelize.STRING(255),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserGameBiodatas");
  },
};
