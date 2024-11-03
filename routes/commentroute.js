const controller = require("../controllers/commentcontroller");
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
 * /comment:
 *   post:
 *     summary: Add a new comment
 *     tags: [Comments]
 *     security:
 *       - accessTokenAuth: []
 *     parameters:
 *       - in: header
 *         name: materialid
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the material to which the comment belongs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment added
 */
  app.post("/comment", verifyToken, controller.addComment);

/**
 * @swagger
 * /comment/{commentId}:
 *   put:
 *     summary: Modify a comment
 *     tags: [Comments]
 *     security:
 *       - accessTokenAuth: []
 *     parameters:
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the comment to modify
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: New comment text
 *     responses:
 *       200:
 *         description: Comment updated
 */
app.put("/comment/:commentId", verifyToken, controller.modifyComment);


  /**
   * @swagger
   * /comment/{commentId}:
   *   delete:
   *     summary: Delete a comment
   *     tags: [Comments]
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: commentId
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the comment to delete
   *     responses:
   *       200:
   *         description: Comment deleted
   */
  app.delete("/comment/:commentId", verifyToken, controller.deleteComment);

  /**
   * @swagger
   * /comment/{materialId}:
   *   get:
   *     summary: Get comments for a specific material
   *     tags: [Comments]
   *     parameters:
   *       - in: path
   *         name: materialId
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the material
   *     responses:
   *       200:
   *         description: Comments retrieved
   */
  app.get("/comment/:materialId", controller.getCommentsByMaterial);
};
