const controller = require("../controllers/ratingcontroller");
const { verifyToken } = require("../middleware/authjwt");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

/**
 * @swagger
 * /rating:
 *   post:
 *     summary: Add a new rating
 *     security:
 *       - accessTokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               materialId:
 *                 type: integer
 *               rate:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Rating added
 */
  app.post("/rating", verifyToken, controller.addRate);

/**
 * @swagger
 * /rating/{ratingId}:
 *   put:
 *     summary: Modify a rating
 *     security:
 *       - accessTokenAuth: []
 *     parameters:
 *       - in: path
 *         name: ratingId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rate:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Rating updated
 */
  app.put("/rating/:ratingId", verifyToken, controller.modifyRate);

  /**
   * @swagger
   * /rating/{ratingId}:
   *   post:
   *     summary: Delete a rating
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: ratingId
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the rating to delete
   *     responses:
   *       200:
   *         description: Rating deleted
   */
  app.post("/rating/:ratingId", verifyToken, controller.deleteRate);
};
