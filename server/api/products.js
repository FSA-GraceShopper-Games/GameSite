const router = require('express').Router()
module.exports = router
const models = require('../db/models')

router.get('/', (req, res, next) =>
{   models.Products.findAll()
        .then(result => res.json(result))
        .catch(next)
})

router.get('/:id', (req, res, next) => 
{   models.Products.findOne({where: {id: rep.params.id}})
        .then(result => res.json(result))
        .catch(next)
})

router.get('/:id', (req, res, next) => 
{   models.Products.findOne({where: {id: rep.params.id}})
        .then(result => res.json(result))
        .catch(next)
})


router.post('/', (req, res, next) =>
{   models.Products.create(req.body)
        .then(result => res.json(result))
        .catch(next)
})

router.post('/', (req, res, next) =>
{   models.Products.create(req.body)
        .then(result => res.json(result))
        .catch(next)
})

router.put('/:id', (req, res, next) =>
{   models.Products.findOne({where: {id: req.params.id}})
        .then(result => result.update({name: req.body.name, 
                                       description: req.body.description,
                                       image: req.body.image,
                                       genreId: req.body.genreId}, 
                                       {returning: true}))
        .then(updatedProd => res.json(updatedProd[1]))
})


// router.put('/:gameId', (req, res, next) => 
// {   models.Products.findOne({where: {id: req.params.gameId}})
//         .then(product => product.update({quantity}))
// })

