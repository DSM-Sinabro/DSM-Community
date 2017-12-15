const router = require('express').Router(),
      authMiddleware = require('../../middlewares/auth'),
      controller = require('./notice.controller');

/**
 * @swagger
 * definition:
 *   post:
 *     properties:
 *       _id:
 *         type: integer
 *       title:
 *         type: string
 *       contents:
 *         type: string
 *       writeDate:
 *         type: string
 *       tags:
 *         type: array
 *       images:
 *         type: array
 */

 //definition, minimum example, 미들웨어 등록 401 put post 
/**
 * @swagger
 * /notice/:pid:
 *   get:
 *     tags:
 *       - notice
 *     description: Returns all posts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           $ref: '#definitions/post'
 */
router.route('/notice/').get(controller.getPostlist);

/**
 * @swagger
 * /notice:
 *   post:
 *     tags:
 *       - notice
 *     description: Creates a new post
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: post
 *         description: post object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/post'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.route('/notice/').post(controller.createPost);

/**
 * @swagger
 * /notice/:pid:
 *   get:
 *     tags:
 *       - notice
 *     description: Returns a single post
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Post's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single post
 *         schema:
 *           $ref: '#/definitions/post'
 */
router.route('/notice/:pid').get(controller.readPost);


/**
 * @swagger
 * /notice/:pid:
 *   put:
 *     tags: 
 *       - notice
 *     description: Updates a single post
 *     produces: application/json
 *     parameters:
 *       - name: post
 *         in: body
 *         description: Fields for the post resource
 *         schema:
 *           type: array
 *           $ref: '#/definitions/post'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.route('/notice/:pid').put(controller.revisePost);

/**
 * @swagger
 * /notice/:pid:
 *   delete:
 *     tags:
 *       - notice
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: post's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.route('/notice/:pid').delete(controller.dropPost);

module.exports = router;