const { Sequelize } = require("sequelize");
const db = require("../config/db");

const Rating = db.define("Rating", {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: "Enter only number!" },
    },
  },
  material_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: "Enter only number!" },
    },
  },
  rating: {
    type: Sequelize.FLOAT(5),
    allowNull: false,
    validate: {
      isFloat: { msg: "Enter only float number!" },
      min: {
        args: [1],
        msg: "Rating must be at least 1.",
      },
      max: {
        args: [5],
        msg: "Rating must be at most 5.",
      },
    },
  },
});

module.exports = Rating;
