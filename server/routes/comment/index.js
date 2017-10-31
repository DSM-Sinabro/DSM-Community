const controller = require('./comment.controller');
let router = require('express').Router();

router.route('/comment').post(controller.postComment);
router.route('/comment/:commentId').put(controller.reviseComment);
router.route('/comment/:commentId').delete(controller.dropComment)

module.exports = router;