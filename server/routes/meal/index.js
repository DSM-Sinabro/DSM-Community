const router = require('express').Router();
const loader = require('./meal.loader'); // TODO 변수명 생각해보기
// const updater = require('./meal.update'); TODO 삭제하기
const mealCannot = require('./meal.cannot');

router.route('/meal').get(mealCannot);
router.route('/meal/:option').get(loader);

module.exports = router;