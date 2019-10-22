"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Works", "company"),
      queryInterface.removeColumn("Works", "description"),
      queryInterface.removeColumn("Works", "achievments"),
      queryInterface.addColumn("Works", "content", Sequelize.JSON),
      queryInterface.addColumn("Works", "icons", Sequelize.STRING),
      queryInterface.addColumn("Works", "tags", Sequelize.STRING),
    ]);
  },
};
