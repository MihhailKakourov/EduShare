const db = require('./db');
const sequelize = require("./db");
const bcrypt = require("bcryptjs");
const Category = require('../models/category');
const Comment = require('../models/comment');
const Material = require('../models/material');
const Rating = require('../models/rating');
const Type = require('../models/type');
const User = require('../models/user');
const MaterialType = require('../models')

const PWD = bcrypt.hashSync("admin", 8)

function createAdmin() {
    User.create({
        id: 1,
        username: "admin",
        email: "admin@edushare.ee",
        password: PWD,
        isAdmin: true
    })
}

sequelize.sync({force: true})
    .then(() => {
        console.log("Database created")
        createAdmin()
    })
    .catch(err => {
        console.log(err)
    })
