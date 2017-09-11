const router = require('express').Router()
module.exports = router
const models = require('../db/models')

router.get('/:genreId', (req, res, next) =>{
    models.Products.findAll({where: { genreId: req.params.genreId }})
        .then(result => res.json(result))
        .catch(next)
})