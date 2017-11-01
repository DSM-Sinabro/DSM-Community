let router = require('express').Router();

let recruit_project = require('./recruit/project');
let recruit_study = require('./recruit/study');
let recruit_competition = require('./recruit/competition');
let auth = require('./auth');

router.use('/', recruit_project);
router.use('/', recruit_competition);
router.use('/', recruit_study);
router.use('/', auth);

module.exports = router;