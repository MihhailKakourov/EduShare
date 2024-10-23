const materialController = require("../controllers/materialcontroller")
const { verifyToken } = require("../middleware/authjwt");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.put("/material", verifyToken, materialController.modifyMaterial)
  app.post("/material", verifyToken, materialController.addMaterial)
};