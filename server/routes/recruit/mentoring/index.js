const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./recruit.mentoring.controller');

router.route('/recruit/mentoring/:pid').get(controller.readPost);

router.route('/recruit/mentoring').get(controller.getPostList);

router.route('/recruit/mentoring').post(controller.createPost);

router.route('/recruit/mentoring/:pid').put(controller.revisePost);

router.route('/recruit/mentoring/:pid').delete(controller.dropPost);

module.exports = router;