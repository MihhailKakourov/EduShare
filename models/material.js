const { Sequelize } = require("sequelize");
const db = require("../config/db");

const Material = db.define("Material", {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      len: {
        args: [1, 50],
        message: "Name must be between 1 and 50 characters!",
      },
    },
  },
  content: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(255),
    validate: {
      len: {
        args: [0, 255],
        message: "Description can be up to 255 characters.",
      },
    },
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Categories",
      key: "id",
    },
  },
});

module.exports = Material;
