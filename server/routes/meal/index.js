const router = require('express').Router();
const loader = require('./meal.loader');

router.route('/meal/:option').get(loader);

module.exports = router;