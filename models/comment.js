const { Sequelize } = require("sequelize");
const db = require("../config/db");

const Comment = db.define("Comment", {
  content: {
    type: Sequelize.STRING(255),
    allowNull: false,
    validate: {
      len: {
        args: [1, 255],
        msg: "Content must be between 1 and 255 characters!",
      },
    },
  },
  material_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: "Enter only number!",
      },
    },
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: "Enter only number!",
      },
    },
  },
});

module.exports = Comment;