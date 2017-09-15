const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))

router.use('/products', require('./products'))

router.use('/lineitem', require('./lineitem'))

router.use('/genre', require('./genre'))

router.use('/review', require('./review'))

router.use('/order', require('./order'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
