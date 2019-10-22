"use strict";

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Must name project",
        },
      },
      content: {
        type: DataTypes.JSON,
        allowNull: {
          args: false,
          msg: "Must have project details",
        },
      },
      icons: {
        type: DataTypes.STRING,
        allowNull: {
          args: true,
        },
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: {
          args: true,
        },
      },
      month_year: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Must describe project completion dates",
        },
      },
    },
    {}
  );
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};
