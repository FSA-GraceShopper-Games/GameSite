const router = require('express').Router()
module.exports = router
const models = require('../db/models')

router.get('/', (req, res, next) =>
{   models.Products.findAll()
        .then(result => res.json(result))
        .catch(next)
})

router.get('/:id', (req, res, next) => 
{   models.Products.findAll({where: {categoryId: rep.params.id}})
        .then(result => res.json(result))
        .catch(next)
})

router.get('/singleProduct/:productId', (req, res, next) =>
{    models.Products.findOne({where: { id: req.params.productId }})
        .then(result => res.json(result))
        .catch(next)

})

router.delete('/singleProduct/:gameId', (req, res, next) => 
{   models.Products.destroy({where: {categoryId: req.params.categoryId, id: req.params.gameId}})
        .then(result => res.json(result))
        .catch(next)
})

