"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Projects", "link", Sequelize.STRING),
      queryInterface.addColumn("Projects", "image", Sequelize.BLOB),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Projects", "link"),
      queryInterface.removeColumn("Projects", "image"),
    ]);
  },
};
