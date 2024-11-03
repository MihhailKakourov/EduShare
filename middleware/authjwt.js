const jwt = require("jsonwebtoken");
const config = require("../config/authconfig.js");
const db = require("../models");
const { User } = require('../models');


verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token,
            config.secret,
            (err, decoded) => {
              if (err) {
                return res.status(401).send({
                  message: "Unauthorized!",
                });
              }
              req.userId = decoded.id;
              next();
            });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    if (!user) {
      return res.status(404).send({ message: "User Not Found." });
    }

    if (user.isAdmin) {
      next();
      return;
    }

    res.status(403).send({
      message: "Require Admin Role!"
    });
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
};




const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};
module.exports = authJwt;