const router = require('express').Router();
const authMiddleware = require('../../middlewares/auth');
const controller = require('./notice.controller');

router.route('/notice/:pid').get(controller.readPost);

router.route('/notice/').get(controller.getPostlist);

router.route('/notice/').post(controller.createPost);

router.route('/notice/:pid').put(controller.revisePost);

router.route('/notice/:pid').delete(controller.dropPost);

module.exports = router;