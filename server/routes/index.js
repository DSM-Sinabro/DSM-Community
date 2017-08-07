let router = require('express').Router();

let recruit_project = require('./recruit/recruit-project');
let recruit_study = require('./recruit/recruit-study');
let user = require('./user');

router.use('/', recruit_project);
router.use('/', recruit_study);
router.use('/', user);
module.exports = router;