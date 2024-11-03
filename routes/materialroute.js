const controller = require("../controllers/materialcontroller");
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
 * /material/{materialId}:
 *   put:
 *     summary: Modify a material
 *     security:
 *       - accessTokenAuth: []
 *     parameters:
 *       - in: path
 *         name: materialId
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
 *               name:
 *                 type: string
 *                 description: Title of the material
 *               content:
 *                 type: string
 *                 description: Content of the material
 *               description:
 *                 type: string
 *                 description: Description of the material
 *               category_id:
 *                 type: integer
 *                 description: ID of the category to which the material belongs
 *               typeIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: Array of IDs for the types associated with the material
 *     responses:
 *       200:
 *         description: Material updated
 *       404:
 *         description: Material not found
 *       403:
 *         description: Not authorized to modify this material
 */
app.put('/material/:materialId', verifyToken, controller.modifyMaterial);


/**
 * @swagger
 * /material:
 *   post:
 *     summary: Add a new material
 *     security:
 *       - accessTokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Title of the material
 *               content:
 *                 type: string
 *                 description: Content of the material
 *               description:
 *                 type: string
 *                 description: Description of the material
 *               category_id:
 *                 type: integer
 *                 description: ID of the category to which the material belongs
 *               typeIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: Array of IDs for the types associated with the material
 *     responses:
 *       201:
 *         description: Material created
 *       500:
 *         description: Server error
 */
app.post("/material", verifyToken, controller.addMaterial);


  /**
   * @swagger
   * /material/{materialId}:
   *   delete:
   *     summary: Delete a material
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: materialId
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Material deleted
   */
  app.delete("/material/:materialId", verifyToken, controller.deleteMaterial);

/**
 * @swagger
 * /material/search:
 *   get:
 *     summary: Search materials by title
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Title of the material to search for
 *     responses:
 *       200:
 *         description: Materials found
 */
  app.get("/material/search", controller.searchMaterialsByTitle);

  /**
   * @swagger
   * /material:
   *   get:
   *     summary: Show all materials
   *     responses:
   *       200:
   *         description: List of materials
   */
  app.get("/material", controller.showAllMaterials);
};
