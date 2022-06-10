"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("UserGames", "forgot_pass_token", {
      type: Sequelize.STRING,
    });
    queryInterface.addColumn("UserGames", "forgot_pass_token_expired_at", {
      type: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("UserGames", "forgot_pass_token");
    queryInterface.removeColumn("UserGames", "forgot_pass_token_expired_at");
  },
};
