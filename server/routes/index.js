let router = require('express').Router();

let recruit_project = require('./recruit/project');
let recruit_study = require('./recruit/study');
let auth = require('./auth');
let meal = require('./meal');

router.use('/', recruit_project);
router.use('/', recruit_study);
router.use('/', auth);
router.use('/', meal);

module.exports = router;