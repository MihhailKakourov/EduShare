const adminController = require('../controllers/admincontroller');
const { verifyToken, isAdmin } = require('../middleware/authjwt');

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
   * tags:
   *   name: Admin
   *   description: Administrative tools
   */

  // Пользователи
  /**
   * @swagger
   * /admin/users:
   *   get:
   *     summary: Retrieve a list of users
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     responses:
   *       200:
   *         description: A list of users
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/User'
   *       403:
   *         description: Forbidden
   */
  app.get("/admin/users", [verifyToken, isAdmin], adminController.getUsers);
  
  /**
   * @swagger
   * /admin/users:
   *   post:
   *     summary: Create a new user
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/User'
   *     responses:
   *       201:
   *         description: User created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       403:
   *         description: Forbidden
   */
  app.post("/admin/users", [verifyToken, isAdmin], adminController.createUser);
  
  /**
   * @swagger
   * /admin/users/{id}:
   *   put:
   *     summary: Update a user
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: User ID
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/User'
   *     responses:
   *       200:
   *         description: User updated
   *       404:
   *         description: User not found
   *       403:
   *         description: Forbidden
   */
  app.put("/admin/users/:id", [verifyToken, isAdmin], adminController.updateUser);
  
  /**
   * @swagger
   * /admin/users/{id}:
   *   delete:
   *     summary: Delete a user
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: User ID
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: User deleted
   *       404:
   *         description: User not found
   *       403:
   *         description: Forbidden
   */
  app.delete("/admin/users/:id", [verifyToken, isAdmin], adminController.deleteUser);

  // Материалы
  /**
   * @swagger
   * /admin/materials:
   *   get:
   *     summary: Retrieve a list of materials
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     responses:
   *       200:
   *         description: A list of materials
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Material'
   *       403:
   *         description: Forbidden
   */
  app.get("/admin/materials", [verifyToken, isAdmin], adminController.getMaterials);
  
  /**
   * @swagger
   * /admin/materials:
   *   post:
   *     summary: Create a new material
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Material'
   *     responses:
   *       201:
   *         description: Material created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Material'
   *       403:
   *         description: Forbidden
   */
  app.post("/admin/materials", [verifyToken, isAdmin], adminController.createMaterial);
  
  /**
   * @swagger
   * /admin/materials/{id}:
   *   put:
   *     summary: Update a material
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Material ID
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Material'
   *     responses:
   *       200:
   *         description: Material updated
   *       404:
   *         description: Material not found
   *       403:
   *         description: Forbidden
   */
  app.put("/admin/materials/:id", [verifyToken, isAdmin], adminController.updateMaterial);
  
  /**
   * @swagger
   * /admin/materials/{id}:
   *   delete:
   *     summary: Delete a material
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Material ID
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Material deleted
   *       404:
   *         description: Material not found
   *       403:
   *         description: Forbidden
   */
  app.delete("/admin/materials/:id", [verifyToken, isAdmin], adminController.deleteMaterial);

  // Категории
  /**
   * @swagger
   * /admin/categories:
   *   get:
   *     summary: Retrieve a list of categories
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     responses:
   *       200:
   *         description: A list of categories
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Category'
   *       403:
   *         description: Forbidden
   */
  app.get("/admin/categories", [verifyToken, isAdmin], adminController.getCategories);
  
  /**
   * @swagger
   * /admin/categories:
   *   post:
   *     summary: Create a new category
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Category'
   *     responses:
   *       201:
   *         description: Category created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Category'
   *       403:
   *         description: Forbidden
   */
  app.post("/admin/categories", [verifyToken, isAdmin], adminController.createCategory);
  
  /**
   * @swagger
   * /admin/categories/{id}:
   *   put:
   *     summary: Update a category
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Category ID
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Category'
   *     responses:
   *       200:
   *         description: Category updated
   *       404:
   *         description: Category not found
   *       403:
   *         description: Forbidden
   */
  app.put("/admin/categories/:id", [verifyToken, isAdmin], adminController.updateCategory);
  
  /**
   * @swagger
   * /admin/categories/{id}:
   *   delete:
   *     summary: Delete a category
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Category ID
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Category deleted
   *       404:
   *         description: Category not found
   *       403:
   *         description: Forbidden
   */
  app.delete("/admin/categories/:id", [verifyToken, isAdmin], adminController.deleteCategory);

  // Комментарии
  /**
   * @swagger
   * /admin/comments:
   *   get:
   *     summary: Retrieve a list of comments
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     responses:
   *       200:
   *         description: A list of comments
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Comment'
   *       403:
   *         description: Forbidden
   */
  app.get("/admin/comments", [verifyToken, isAdmin], adminController.getComments);
  
  /**
   * @swagger
   * /admin/comments:
   *   post:
   *     summary: Create a new comment
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Comment'
   *     responses:
   *       201:
   *         description: Comment created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Comment'
   *       403:
   *         description: Forbidden
   */
  app.post("/admin/comments", [verifyToken, isAdmin], adminController.createComment);
  
  /**
   * @swagger
   * /admin/comments/{id}:
   *   put:
   *     summary: Update a comment
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Comment ID
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Comment'
   *     responses:
   *       200:
   *         description: Comment updated
   *       404:
   *         description: Comment not found
   *       403:
   *         description: Forbidden
   */
  app.put("/admin/comments/:id", [verifyToken, isAdmin], adminController.updateComment);
  
  /**
   * @swagger
   * /admin/comments/{id}:
   *   delete:
   *     summary: Delete a comment
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Comment ID
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Comment deleted
   *       404:
   *         description: Comment not found
   *       403:
   *         description: Forbidden
   */
  app.delete("/admin/comments/:id", [verifyToken, isAdmin], adminController.deleteComment);

  // Типы
  /**
   * @swagger
   * /admin/types:
   *   get:
   *     summary: Retrieve a list of types
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     responses:
   *       200:
   *         description: A list of types
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Type'
   *       403:
   *         description: Forbidden
   */
  app.get("/admin/types", [verifyToken, isAdmin], adminController.getTypes);
  
  /**
   * @swagger
   * /admin/types:
   *   post:
   *     summary: Create a new type
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Type'
   *     responses:
   *       201:
   *         description: Type created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Type'
   *       403:
   *         description: Forbidden
   */
  app.post("/admin/types", [verifyToken, isAdmin], adminController.createType);
  
  /**
   * @swagger
   * /admin/types/{id}:
   *   put:
   *     summary: Update a type
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Type ID
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Type'
   *     responses:
   *       200:
   *         description: Type updated
   *       404:
   *         description: Type not found
   *       403:
   *         description: Forbidden
   */
  app.put("/admin/types/:id", [verifyToken, isAdmin], adminController.updateType);
  
  /**
   * @swagger
   * /admin/types/{id}:
   *   delete:
   *     summary: Delete a type
   *     tags: [Admin]
   *     security:
   *       - accessTokenAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Type ID
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Type deleted
   *       404:
   *         description: Type not found
   *       403:
   *         description: Forbidden
   */
  app.delete("/admin/types/:id", [verifyToken, isAdmin], adminController.deleteType);
};
