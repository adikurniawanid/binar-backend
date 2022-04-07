const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

("use strict");

module.exports = {
  async up(queryInterface, Sequelize) {
    const userGameData = [];
    const userGameBiodataData = [];
    const userGameHistoryData = [];

    for (let index = 0; index < 21; index++) {
      const dummyData = {
        id: index + 1,
        publicId: uuidv4(),
        name: (tempName = faker.name.findName()),
        age: faker.datatype.number({ min: 18, max: 50 }),
        username: (tempUsername = faker.internet
          .userName(tempName)
          .substring(0, 16)),
        password: await bcrypt.hash(tempUsername, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      userGameData.push({
        publicId: dummyData.publicId,
        username: dummyData.username,
        password: dummyData.password,
        createdAt: dummyData.createdAt,
        updatedAt: dummyData.updatedAt,
      });

      userGameBiodataData.push({
        userId: dummyData.id,
        name: dummyData.name,
        age: dummyData.age,
        createdAt: dummyData.createdAt,
        updatedAt: dummyData.updatedAt,
      });

      userGameHistoryData.push({
        userId: faker.datatype.number({ min: 1, max: 21 }),
        startTime: new Date(),
        endTime: new Date(),
        score: faker.datatype.number({ min: 0, max: 9999999 }),
        createdAt: dummyData.createdAt,
        updatedAt: dummyData.updatedAt,
      });
    }

    userGameData[0].publicId = "9e50ab39-8f99-4333-b2b4-8b6344bd23b6";
    userGameData[0].username = "admin";
    userGameData[0].password = await bcrypt.hash("admin", 10);

    await queryInterface.bulkInsert("UserGames", userGameData, {});
    await queryInterface.bulkInsert("UserGameBiodata", userGameBiodataData, {});
    await queryInterface.bulkInsert(
      "UserGameHistories",
      userGameHistoryData,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserGameHistories", null, {});
    await queryInterface.bulkDelete("UserGameBiodata", null, {});
    await queryInterface.bulkDelete("UserGames", null, {});
  },
};
