"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Projects", "icons", Sequelize.STRING),
      queryInterface.addColumn("Projects", "tags", Sequelize.STRING),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("icons"),
      queryInterface.removeColumn("tags"),
    ]);
  },
};
