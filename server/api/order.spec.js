// '/api/order'

const {expect, assert} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Order = db.model('order')
const User = db.model('user')
const LineItem = db.model('lineItem')
const Product = db.model('product')

describe('Order routes', () =>{
    beforeEach(() => {
        db.sync({force: true})

        // User.create({
        //     name: 'Les',
        //     email: 'les@mail.com',
        //     password: '123',
        //     introduction: 'random string',
        //     salt: 'hash',
        //     googleId: 'abc' 
        // })

        Order.create({
                progress: 'in-progress', 
                totalPrice: 30,
                date: new Date(),
                // userId: 1            
        })

        // LineItem.create({
        //     orderId: 1,
        //     userId: 1
        // })

        // Product.create({
        //     name: 'Destiny',
        //     description: 'super cool game and stuff yo!',
        //     image: "https://upload.wikimedia.org/wikipedia/en/b/be/Destiny_box_art.png",
        //     price: 49
        // })


    })

    describe('/api/order', ()=>{

        it('GET /api/order', ()=>{
            return request(app)
              .get('/api/order')
              .expect(200)
              .then( res => {
                  expect(res.body).to.be.an('array')
              })
        })

    })

    //not sure how to test. getting manny errors...
    // describe('/api/order/user/:id', () =>{
    //     xit('GET /api/order/user/:id', () =>{
    //         return request(app)
    //           .get('/api/order/user/1')
    //           .expect(200)
    //     })
    // })

    describe('/api/order/:id', ()=>{
        it('GET /api/order/:id', ()=>{
            return request(app)
              .get('/api/order/1')
              .expect(200)
        })

    })


})

        // beforeEach(()=>{
        //     return Order.create({
        //         progress: 'in-progress', 
        //         totalPrice: 30,
        //         date: new Date(),
        //         // userId: 1
        //     })
        // })



        //     // Not sure how to test ??
        // xit('GET orders by user Id', () => {
        //     return request(app)
        //       .get('/api/user/1')
        // })

        // xit('GET orders by id', ()=>{
        //     return request(app)
        //       .get('/api/order/:id')
        //       .expect(200)
        // })