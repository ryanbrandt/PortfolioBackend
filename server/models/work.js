"use strict";
module.exports = (sequelize, DataTypes) => {
  const Work = sequelize.define(
    "Work",
    {
      company: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Must have company name",
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Must have work description",
        },
      },
      achievments: {
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
