const controller = require("../controllers/authcontroller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  /**
   * @swagger
   * /signup:
   *   post:
   *     summary: Register a new user
   *     description: Creates a new user in the system.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *                 description: The username of the new user
   *               email:
   *                 type: string
   *                 format: email
   *                 description: The email of the new user
   *               password:
   *                 type: string
   *                 description: The password of the new user
   *               firstname:
   *                 type: string
   *                 description: The first name of the new user
   *               lastname:
   *                 type: string
   *                 description: The last name of the new user
   *               isAdmin:
   *                 type: boolean
   *                 description: Specifies if the user is an admin
   *     responses:
   *       200:
   *         description: User was registered successfully
   *       500:
   *         description: Server error
   */
  app.post("/signup", controller.signup);

  /**
   * @swagger
   * /signin:
   *   post:
   *     summary: Log in a user
   *     description: Authenticates a user and returns a token.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *                 description: The username of the user
   *               password:
   *                 type: string
   *                 description: The password of the user
   *     responses:
   *       200:
   *         description: Successful login
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                   description: The ID of the user
   *                 username:
   *                   type: string
   *                   description: The username of the user
   *                 email:
   *                   type: string
   *                   description: The email of the user
   *                 roles:
   *                   type: array
   *                   items:
   *                     type: string
   *                 accessToken:
   *                   type: string
   *                   description: The access token for the user
   *       401:
   *         description: Invalid password
   *       404:
   *         description: User not found
   *       500:
   *         description: Server error
   */
  app.post("/signin", controller.signin);
};
