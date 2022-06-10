("use strict");
const { faker } = require("@faker-js/faker");
const { hashPassword, generateUUID } = require("../../api/helpers");

module.exports = {
  async up(queryInterface, Sequelize) {
    const userGameData = [];
    const userGameBiodataData = [];

    for (let index = 0; index < 21; index++) {
      const dummyData = {
        id: index + 1,
        publicId: await generateUUID(),
        name: (tempName = faker.name.findName()),
        age: faker.datatype.number({ min: 18, max: 50 }),
        username: (tempUsername = faker.internet
          .userName(tempName)
          .substring(0, 16)),
        password: await hashPassword(tempUsername),
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
    }

    userGameData[0].publicId = "9e50ab39-8f99-4333-b2b4-8b6344bd23b6";
    userGameData[0].username = "admin";
    userGameData[0].password = await hashPassword("admin");

    await queryInterface.bulkInsert("UserGames", userGameData, {});
    await queryInterface.bulkInsert(
      "UserGameBiodatas",
      userGameBiodataData,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserGames", null, {});
    await queryInterface.bulkDelete("UserGameBiodatas", null, {});
  },
};
