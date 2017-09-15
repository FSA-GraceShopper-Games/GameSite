const router = require('express').Router()
module.exports = router
const models = require('../db/models')

router.get('/', (req, res, next) =>
{   models.Product.findAll()
        .then(result => res.json(result))
        .catch(next)
})

router.get('/:id', (req, res, next) => 
{   models.Product.findOne({where: {id: req.params.id}})
        .then(result => res.json(result))
        .catch(next)
})

router.get('/genre/:id', (req, res, next) =>{
        models.Product.findAll({where: { genreId: req.params.id }})
                .then(result => res.json(result))
                .catch(next)
})

router.post('/', (req, res, next) =>
{   models.Product.create(req.body)
        .then(result => res.json(result))
        .catch(next)
})

router.put('/:id', (req, res, next) =>
{   models.Product.findOne({where: {id: req.params.id}})
        .then(result => result.update(req.body, {returning: true}))
        .then(updatedProd => res.json(updatedProd[1]))
})

router.delete('/:id', (req,res,next) =>
{   models.Product.findOne({where: {id : req.params.id}})
        .then(result => result.destroy())
        .then(res.json('success!!!!'))
})