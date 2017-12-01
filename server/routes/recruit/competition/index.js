const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./recruit.competition.controller');

router.route('/recruit/competition/:pid').get(controller.readPost);

router.route('/recruit/competition').get(controller.getPostList);

router.route('/recruit/competition').post(authMiddleware, controller.createPost);

router.route('/recruit/competition/:pid').put(authMiddleware, controller.revisePost);

router.route('/recruit/competition/:pid').delete(authMiddleware, controller.dropPost);

module.exports = router;