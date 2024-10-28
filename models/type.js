const { Sequelize } = require("sequelize");
const db = require("../config/db");

const Type = db.define(
  "Type",
  {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [1, 50],
          message: "Name must be between 1 and 50 characters.",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Type;
