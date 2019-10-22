"use strict";
module.exports = (sequelize, DataTypes) => {
  const Work = sequelize.define(
    "Work",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Must have company name",
        },
      },
      content: {
        type: DataTypes.JSON,
        allowNull: {
          args: false,
          msg: "Must have company details",
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
          msg: "Must have date interval string",
        },
      },
    },
    {}
  );
  Work.associate = function(models) {
    // associations can be defined here
  };
  return Work;
};
