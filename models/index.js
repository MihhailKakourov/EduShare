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

User.hasMany(Rating, {foreignKey: "user_id"});
Rating.belongsTo(User, {foreignKey:"user_id"});

Material.hasMany(Rating, {foreignKey:"material_id"});
Rating.belongsTo(Material, {foreignKey:"material_id"});

Material.hasMany(Comment, {foreignKey:"material_id"});
Comment.belongsTo(Material, {foreignKey:"material_id"})

module.exports = {
  Category,
  Comment,
  Material,
  Rating,
  Type,
  User,
  MaterialType
};
