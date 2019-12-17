"use strict";
module.exports = (sequelize, DataTypes) => {
  const Blogs = sequelize.define(
    "Blogs",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Must name blog",
        },
      },
      content: {
        type: DataTypes.JSON,
        allowNull: {
          args: false,
          msg: "Must have blog content",
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
          msg: "Must include blog date string",
        },
      },
      image: {
        type: DataTypes.BLOB,
        allowNull: {
          args: true,
        },
      },
    },
    {}
  );
  Blogs.associate = function(models) {
    // associations can be defined here
  };
  return Blogs;
};
