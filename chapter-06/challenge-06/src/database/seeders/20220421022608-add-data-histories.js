("use strict");
const { faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    const userGameData = [];
    const userGameBiodataData = [];
    const userGameHistoryData = [];

    for (let index = 0; index < 21; index++) {
      userGameHistoryData.push({
        userId: faker.datatype.number({ min: 1, max: 21 }),
        startTime: new Date(),
        endTime: new Date(),
        score: faker.datatype.number({ min: 0, max: 9999999 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert(
      "UserGameHistories",
      userGameHistoryData,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserGames", null, {});
  },
};
