const userController = require("../controllers/usercontroller");
const { verifyToken } = require("../middleware/authjwt");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.put("/user", verifyToken, userController.modifyCredentials)
  app.get("/users", verifyToken, userController.getUsers)
};