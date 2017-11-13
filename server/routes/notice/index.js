const router = require('express').Router();
const authMiddleware = require('../../middlewares/auth');
const controller = require('./notice.controller');

/**
 * @swagger
 * definition:s
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
 *           $ref: '../../database/models/notice'
 */
router.route('/notice/').get(controller.getPostlist);

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
 *         description: Puppy's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single puppy
 *         schema:
 *           $ref: '../../database/models/notice'
 */
router.route('/notice/:pid').get(controller.readPost);

/**
 * @swagger
 * /notice/:
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
 *           $ref: '../../database/models/notice'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.route('/notice/').post(controller.createPost);

/**
 * @swagger
 * /notice/:pid:
 *   put:
 *     tags: notice
 *     description: Updates a single post
 *     produces: application/json
 *     parameters:
 *       name: post
 *       in: body
 *       description: Fields for the post resource
 *       schema:
 *         type: array
 *         $ref: '../../database/models/notice'
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
 *     description: Deletes a single post
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