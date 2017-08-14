const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./recruit.project.controller');

router.route('/recruit/project/:pid').get(authMiddleware, controller.readPost);

router.route('/recruit/project').get(authMiddleware, controller.getPostList);

router.route('/recruit/project').post(authMiddleware, controller.createPost);

router.route('/recruit/project/:pid').put(authMiddleware, controller.revisePost);

router.route('/recruit/project/:pid').delete(authMiddleware, controller.dropPost);

module.exports = router;