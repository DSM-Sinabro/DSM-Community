const router = require('express').Router();
let boardListing = require('./board.listing');
let articleRead = require('./article.read');
let articleWrite = require('./article.create');
let articleUpdate = 

router.route('/freeboard').get(boardListing);
router.route('/freeboard/:title').get(articleRead);
router.route('/freeboard/:title').post(articleWrite);
router.route('/freeboard/:title').put();
router.route('/freeboard/:title').delete();

module.exports = router;