"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Works", "name", Sequelize.STRING);
  },
};
