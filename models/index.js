const sequelize = require("../config/db");
const Category = require("./category");
const Comment = require("./comment");
const Material = require("./material");
const Rating = require("./rating");
const Type = require("./type");
const User = require("./user");

const MaterialType = sequelize.define('MaterialType', {}, { timestamps: false });

Material.belongsToMany(Type, { through: MaterialType, as: 'types' });
Type.belongsToMany(Material, { through: MaterialType, as: 'materials' })

Material.belongsTo(Category, { foreignKey: "category_id", as: "category" });
Category.hasMany(Material, { foreignKey: "category_id", as: "materials" });

User.hasMany(Comment, { foreignKey: "user_id" });
Comment.belongsTo(User, { foreignKey: "user_id" });

module.exports = {
  Category,
  Comment,
  Material,
  Rating,
  Type,
  User,
  MaterialType
};
