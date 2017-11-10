const router = require('express').Router();
const loader = require('./meal.loader');
const updater = require('./meal.update');
const mealCannot = require('./meal.cannot');

router.route('/meal').get(mealCannot);
router.route('/meal/:option').get(loader);

module.exports = router;