("use strict");
const { faker } = require("@faker-js/faker");
const { hashPassword } = require("../../api/helpers");

module.exports = {
  async up(queryInterface, Sequelize) {
    const userData = [];
    const dummyTime = new Date();

    for (let index = 0; index < 21; index++) {
      userData.push({
        id: index + 1,
        username: (tempUsername = faker.internet.userName().substring(0, 16)),
        password: await hashPassword(tempUsername),
        roleId: 3,
        createdAt: dummyTime,
        updatedAt: dummyTime,
      });
    }

    userData[0].username = "admin";
    userData[0].password = await hashPassword("admin");
    userData[0].roleId = 1;

    await queryInterface.bulkInsert("Users", userData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
