const router = require('express').Router()
module.exports = router
const models = require('../db/models')

router.get('/', (req, res, next) =>
{   models.Lineitem.findAll()
        .then(result => res.json(result))
        .catch(next)
})

router.get('/:userId', (req, res, next) =>
{   models.Lineitem.findAll({where: { userId: req.params.userId}})
        .then(result => res.json(result))
        .catch(next)
})

router.post('/', (req, res, next) => {
        models.LineItem.create()
        .then((res) => {
                res.setProduct(req.body.productId)
                res.setUser(req.body.userId)
                res.setOrder(req.body.orderId)                
                return res
        })
        .then((res) => {
                res.setUser(req.body.userId)
        })
                .then(result => res.json(result))
                .catch(next)
})
