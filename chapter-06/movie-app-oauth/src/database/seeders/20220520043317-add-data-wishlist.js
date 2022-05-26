"use strict";

const { default: faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    const wishlistData = [];
    const dummyTime = new Date();

    for (let index = 0; index < 21; index++) {
      wishlistData.push({
        id: index + 1,
        UserId: faker.datatype.number({ min: 1, max: 21 }),
        FilmId: faker.datatype.number({ min: 1, max: 21 }),
        createdAt: dummyTime,
        updatedAt: dummyTime,
      });
    }

    await queryInterface.bulkInsert("Wishlists", wishlistData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Wishlists", null, {});
  },
};
