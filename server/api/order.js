const router = require('express').Router()
module.exports = router
const models = require('../db/models')
const LineItem = models.LineItem
const Product = models.Product
const User = models.User
var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });


router.get('/', (req, res, next) =>
{   models.Order.findAll()
        .then(result => res.json(result))
        .catch(next)
})

router.get('/user/:userId', (req,res,next) => {
    models.Order.findAll({
            where: {userId: req.params.userId},
            include: [
                    {model: User}
            ],
            include: [
                {model: LineItem, include: [
                  {model: Product}
                ]}
              ]
        })
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
{   models.Order.create({totalPrice: req.body.totalPrice, address: req.body.address, email:req.body.email})
        .then((order) => {
                order.setUser(req.body.userId)
                req.body.products.forEach(function(productId) {
                        return models.LineItem.create()
                        .then(res=> {
                                res.setProduct(productId)
                                res.setOrder(order.id)
                        })
                })
                
        })
        .then((res) => {
                
        })
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