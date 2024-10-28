const { Sequelize } = require("sequelize");
const db = require("../config/db");

const User = db.define(
  "User",
  {
    username: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    firstname: {
      type: Sequelize.STRING(50),
      validate: {
        len: {
          args: [0, 50],
          message: "First name can be up to 50 characters.",
        },
      },
    },
    lastname: {
      type: Sequelize.STRING(50),
      validate: {
        len: {
          args: [0, 50],
          message: "Last name can be up to 50 characters.",
        },
      },
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          message: "Enter a valid email!",
        },
      },
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          message: "Password must be at least 6 characters long.",
        },
      },
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
