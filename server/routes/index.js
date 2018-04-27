let router = require('express').Router();

let recruit_project = require('./recruit/project');
let recruit_study = require('./recruit/study');
let recruit_competition = require('./recruit/competition');
let comment = require('./comment');
let auth = require('./auth');
let meal = require('./meal');
let search = require('./search');

router.use('/', recruit_project);
router.use('/', recruit_competition);
router.use('/', recruit_study);
router.use('/', comment);
router.use('/', auth);
router.use('/', meal);
router.use('/', search);
module.exports = router;