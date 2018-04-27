const router = require('express').Router()
const controller = require('./search.controller')

router.route('/search').get(controller.search)

module.exports = router