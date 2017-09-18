const router = require('express').Router()
module.exports = router
const models = require('../db/models')



router.get('/', (req,res,next) => {
    // req.session.cart = [];
    console.log(req.session.cart)
    if (req.session.cart === undefined) {
        req.session.cart = []
    } 
    res.json( req.session.cart)
})



router.post('/', (req,res,next) => {
    req.session.cart.push(req.body)
    res.json(req.session.cart)
})