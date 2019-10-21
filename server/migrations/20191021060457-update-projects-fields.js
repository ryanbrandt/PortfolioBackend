"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Projects", "content", Sequelize.JSON);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("content");
  },
};
