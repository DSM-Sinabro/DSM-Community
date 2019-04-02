const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./recruit.study.controller');

// router.route('/recruit/study/:pid').get(authMiddleware, controller.readPost);

// router.route('/recruit/study').get(authMiddleware, controller.getPostList);

// router.route('/recruit/study').post(authMiddleware, controller.createPost);

// router.route('/recruit/study/:pid').put(authMiddleware, controller.revisePost);

// router.route('/recruit/study/:pid').delete(authMiddleware, controller.dropPost);
router.route('/recruit/study/:pid').get( controller.readPost);

router.route('/recruit/study').get( controller.getPostList);

router.route('/recruit/study').post(controller.createPost);

router.route('/recruit/study/:pid').put( controller.revisePost);

router.route('/recruit/study/:pid').delete( controller.dropPost);

module.exports = router;