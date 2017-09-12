const router = require('express').Router()
module.exports = router
const models = require('../db/models')

router.get('/', (req, res, next) =>{
    models.Genre.findAll()
        .then(result => res.json(result))
        .catch(next)
})

router.get('/:id', (req, res, next) =>{
    models.Products.findAll({where: { genreId: req.params.id }})
        .then(result => res.json(result))
        .catch(next)
})