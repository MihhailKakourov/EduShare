const userController = require("../controllers/usercontroller");
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
 * /user:
 *   put:
 *     summary: Modify user credentials
 *     security:
 *       - accessTokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: New username for the user
 *               firstname:
 *                 type: string
 *                 description: New first name for the user
 *               lastname:
 *                 type: string
 *                 description: New last name for the user
 *               password:
 *                 type: string
 *                 description: New password for the user (will be hashed)
 *     responses:
 *       200:
 *         description: User credentials updated
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
app.put("/user", verifyToken, userController.modifyCredentials);

  /**
   * @swagger
   * /users:
   *   get:
   *     summary: Get list of all users
   *     responses:
   *       200:
   *         description: List of users
   */
  app.get("/users", userController.getUsers);
};
