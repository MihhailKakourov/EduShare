const User = require("../models/user");
const { Op } = require('sequelize');
const bcrypt = require("bcryptjs");

exports.modifyCredentials = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    if (req.body.username) {
      user.username = req.body.username;
    }

    if (req.body.fistname) {
      user.firstname = req.body.firstname;
    }

    if (req.body.lastname) {
      user.lastname = req.body.lastname;
    }

    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password, 8);
    }

    await user.save();
    res.status(200).send({ message: "User updated." });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ["username", "email"],
            where: {
                isAdmin: {
                    [Op.eq]: false
                }
            }
        });
        res.status(200).send(users);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}