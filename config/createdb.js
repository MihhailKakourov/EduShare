const sequelize = require("./db");
const Category = require("../models/category");
const Comment = require("../models/comment");
const Material = require("../models/material");
const Rating = require("../models/rating");
const Type = require("../models/type");
const User = require("../models/user");
const MaterialType = require("../models");


sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database created");
  })
  .catch((err) => {
    console.log(err);
  });
