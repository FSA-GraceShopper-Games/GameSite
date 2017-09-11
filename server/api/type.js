const router = require('express').Router()
module.exports = router
const models = require('../db/models')

router.get('/', (req, res, next) =>
{   models.Type.findAll()
        .then(result => res.json(result))
        .catch(next)
})

router.get('/:id', (req, res, next) => 
{   models.Type.findOne({where: { id: req.params.id}})
        .then(result => res.json(result))
        .catch(next)
})

