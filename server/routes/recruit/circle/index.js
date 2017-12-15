const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./recruit.circle.controller');

// router.route('/recruit/circle/:pid').get(authMiddleware, controller.readPost);

// router.route('/recruit/circle').get(authMiddleware, controller.getPostList);

// router.route('/recruit/circle').post(authMiddleware, controller.createPost);

// router.route('/recruit/circle/:pid').put(authMiddleware, controller.revisePost);

// router.route('/recruit/circle/:pid').delete(authMiddleware, controller.dropPost);
router.route('/recruit/circle/:pid').get( controller.readPost);

router.route('/recruit/circle').get( controller.getPostList);

router.route('/recruit/circle').post(controller.createPost);

router.route('/recruit/circle/:pid').put( controller.revisePost);

router.route('/recruit/circle/:pid').delete( controller.dropPost);

module.exports = router;