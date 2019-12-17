"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Blogs", "image", Sequelize.BLOB);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Blogs", "image");
  },
};
