const router = require('express').Router();
const authMiddleware = require('../../../middlewares/auth');
const controller = require('./recruit.competition.controller');

router.route('/recruit/competition/:pid').get(controller.readPost);

router.route('/recruit/competition').get(controller.getPostList);

router.route('/recruit/competition').post(controller.createPost);

router.route('/recruit/competition/:pid').put(controller.revisePost);

router.route('/recruit/competition/:pid').delete(controller.dropPost);

module.exports = router;