const controller = require("../controllers/commentcontroller");
const { verifyToken } = require("../middleware/authjwt");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/comment", verifyToken, controller.addComment);
  app.put("/comment", verifyToken, controller.modifyComment)
};

