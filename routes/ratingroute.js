const ratingController = require("../controllers/ratingcontroller")
const { verifyToken } = require("../middleware/authjwt");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/rating", verifyToken, ratingController.addRate)
  app.put("/rating/:ratingId", verifyToken, ratingController.modifyRate)
};