const router = require('express').Router()
module.exports = router
const models = require('../db/models')


//routerparam
router.get('/', (req, res, next) =>
{   models.Review.findAll()
        .then(result => res.json(result))
        .catch(next)
})

router.get('/:id', (req, res, next) => 
{   models.Review.findOne({where: {id: req.params.id}})
        .then(result => res.json(result))
        .catch(next)
})

router.get('/product/:id', (req, res, next) => 
{   models.Review.findAll({where: {productId: req.params.id}})
        .then(result => res.json(result))
        .catch(next)
})

router.post('/', (req, res, next) =>
{   models.Review.create(req.body)
        .then(result => res.json(result))
        .catch(next)
})

router.put('/:id', (req, res, next) =>
{   models.Review.findOne({where: {id: req.params.id}})
        .then(result => result.update(req.body, {returning: true}))
        .then(updatedReview => res.json(updatedReview[1]))
})

router.delete('/:id', (req,res,next) =>
{   models.Review.findOne({where: {id : req.params.id}})
        .then(result => result.destroy())
        .then(res.json('success!!!!'))
})