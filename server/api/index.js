const router = require('express').Router()
module.exports = router

router.use('/genre', require('./genre'))

<<<<<<< HEAD
router.use('/lineitem', require('./lineitem'))
=======
router.use('/review', require('./review'))
>>>>>>> 9ca2ad6a5460c7b6dbf57b14eb294f64284a4ccd

router.use('/products', require('./products'))

router.use('/users', require('./users'))