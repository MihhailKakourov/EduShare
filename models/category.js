const { Sequelize } = require("sequelize");
const db = require("../config/db");

const Category = db.define(
  "Category",
  {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [1, 50],
          message: "Name must be between 1 and 50 characters!",
        },
      },
    },
    material_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Category;
