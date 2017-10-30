const router = require('express').Router();
let boardListing = require('./board.listing');
let articleRead = require('./article.read');
let articleWrite = require('./article.create');
let articleUpdate = require('./article.modify');
let articleDelete = require('./article.delete');
let auth = require('../../middlewares/auth');

router.route('/freeboard').get(boardListing);
router.route('/freeboard').post(auth, articleWrite);
router.route('/freeboard/:id').put(auth, articleUpdate);
router.route('/freeboard/:id').delete(auth, articleDelete);
router.route('/freeboard/:id').get(articleRead);

module.exports = router;