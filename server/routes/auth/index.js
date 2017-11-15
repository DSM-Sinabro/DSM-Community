let router = require('express').Router();

const controller = require('./auth.controller');

router.route('/signup').post(controller.signup);

router.route('/login').post(controller.login);

router.route('/email').post(controller.email);

router.route('/config_email').post(controller.config_email);

router.route('/modifypw').put(controller.modifypw);

router.route('/reset').put(controller.reset);

router.route('/findid').get(controller.findid);
module.exports = router;