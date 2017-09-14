const router = require('express').Router()
module.exports = router
const models = require('../db/models')

router.get('/', (req, res, next) =>
{   models.Order.findAll()
        .then(result => res.json(result))
        .catch(next)
})

router.get('user/:userId', (req,res,next) => {
    models.Order.findAll({where: {userId: req.params.userId}})
        .then(result => res.json(result))
        .catch(next)
})

router.get('/:id', (req, res, next) => 
{   models.Order.findOne({where: {id: req.params.id}})
        .then(result => res.json(result))
        .catch(next)
})

router.get('/', (req, res, next) =>{
        models.Order.findAll({where: { genreId: req.params.id }})
                .then(result => res.json(result))
                .catch(next)
})

router.post('/', (req, res, next) =>
{   models.Order.create(req.body)
        .then(result => res.json(result))
        .catch(next)
})

router.put('/:id', (req, res, next) =>
{   models.Order.findOne({where: {id: req.params.id}})
        .then(result => result.update(req.body, {returning: true}))
        .then(updatedProd => res.json(updatedProd[1]))
})

router.delete('/:id', (req,res,next) =>
{   models.Order.findOne({where: {id : req.params.id}})
        .then(result => result.destroy())
        .then(res.json('success!!!!'))
})