let router = require('express').Router();

const controller = require('./auth.controller');

router.route('/signup').post(controller.signup);

router.route('/login').post(controller.login);

router.route('/email').post(controller.email);

router.route('/modifypw').post(controller.modifypw);

router.route('/reset').post(controller.reset);

router.route('/findid').get(controller.findid);
module.exports = router;