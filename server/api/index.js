const router = require('express').Router()
module.exports = router

router.use('/genre', require('./genre'))

router.use('/lineitem', require('./lineitem'))

router.use('/products', require('./products'))

router.use('/users', require('./users'))