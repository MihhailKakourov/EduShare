const fs = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { Category, Comment, Material, Rating, Type, User, MaterialType } = require("../models");
const db = require("./db");

async function loadData() {
  try {
    await db.authenticate();
    await db.sync({});

    const data = JSON.parse(await fs.readFile(path.join(__dirname, "data.json"), "utf8"));

    const HashPWDUsers = data.users.map(user => {
      return {
        ...user,
        password: bcrypt.hashSync(user.password, 8)
      };
    });

    await Promise.all(data.categories.map((item) => Category.create(item)));
    await Promise.all(HashPWDUsers.map((item) => User.create(item)));
    await Promise.all(data.comments.map((item) => Comment.create(item)));
    await Promise.all(data.materials.map((item) => Material.create(item)));
    await Promise.all(data.ratings.map((item) => Rating.create(item)));
    await Promise.all(data.types.map((item) => Type.create(item)));
    await Promise.all(data.materialTypes.map((item) => MaterialType.create(item)));

    console.log("Data has been successfully loaded into the database.");
  } catch (error) {
    console.error("Error parsing data:", error);
  } finally {
    await db.close();
  }
}

loadData();
