const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./recruit.project.controller');

router.route('/recruit/project').get(controller.getPostList);

router.route('/recruit/project').post(controller.createPost);

router.route('/recruit/project/:pid').put(controller.revisePost);

router.route('/recruit/project/:pid').delete(controller.dropPost);

router.route('/recruit/project/:pid').get(controller.readPost);

module.exports = router;