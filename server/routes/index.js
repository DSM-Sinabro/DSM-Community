let router = require('express').Router();

let recruit_project = require('./recruit/recruit-project');
let recruit_study = require('./recruit/recruit-study');
let auth = require('./auth');

router.use('/', recruit_project);
router.use('/', recruit_study);
router.use('/', auth);
module.exports = router;