("use strict");
const { faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    const filmData = [];
    const dummyTime = new Date();

    for (let index = 0; index < 21; index++) {
      filmData.push({
        id: index + 1,
        name:
          faker.word.adverb() +
          " " +
          faker.word.conjunction() +
          " " +
          faker.word.noun(),
        createdAt: dummyTime,
        updatedAt: dummyTime,
      });
    }

    await queryInterface.bulkInsert("Films", filmData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Films", null, {});
  },
};
