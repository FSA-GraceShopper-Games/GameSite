const router = require('express').Router()
module.exports = router

router.use('/genre', require('./genre'))

router.use('/review', require('./review'))

router.use('/products', require('./products'))

router.use('/users', require('./users'))