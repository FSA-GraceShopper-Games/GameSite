const router = require('express').Router()
module.exports = router
const models = require('../db/models')



router.get('/', (req,res,next) => {
    if (!req.session.cart) {
        req.session.cart = []
    } 
    res.json( req.session.cart)
})



router.post('/', (req,res,next) => {
    req.session.cart.push(req.body)
    res.json(req.session.cart)
})

router.delete('/', (req,res,next) => {
    req.session.cart = [];
    res.json(req.session.cart)
})

router.put('/', (req,res,next) => {
    for (var i = 0; i< req.session.cart.length; i++) {
        var item = req.session.cart[i];
        console.log('out here', req.body.id, item.id, i)        
        if (item.id == req.body.id) {
            console.log('in here', req.body.id, item.id, i)
            req.session.cart = req.session.cart.slice(0, i).concat(req.session.cart.slice(i+1))
            break;
        }
    }
    console.log(req.session.cart)
    res.json(req.session.cart)
})