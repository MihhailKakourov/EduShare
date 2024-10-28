const sequelize = require("../config/db");
const Category = require("./category");
const Comment = require("./comment");
const Material = require("./material");
const Rating = require("./rating");
const Type = require("./type");
const User = require("./user");

const MaterialType = sequelize.define(
  "MaterialType",
  {},
  { timestamps: false }
);

Material.belongsToMany(Type, { through: MaterialType, as: "type" });
Type.belongsToMany(Material, { through: MaterialType, as: "material" });

Material.hasMany(Rating, { as: "rating", foreignKey: "materialId" });
Rating.belongsTo(Material, { as: "material", foreignKey: "materialId" });

Material.hasMany(Category, { as: "category", foreignKey: "materialId" });
Category.belongsTo(Material, { as: "material", foreignKey: "materialId" });

module.exports = {
  Category,
  Comment,
  Material,
  Rating,
  Type,
  User,
};
