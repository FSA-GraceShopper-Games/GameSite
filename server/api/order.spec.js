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
        return db.sync({force: true})
          .then(() => {
            return Order.create({
                progress: 'in-progress', 
                totalPrice: 30,
                date: new Date()
            })
          })
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
    describe('/api/order/user/:id', () =>{
        it('GET /api/order/user/:id', () =>{
            return request(app)
              .get('/api/order/user/1')
              .expect(200)
        })
    })

    describe('/api/order/:id', ()=>{
        it('GET /api/order/:id', ()=>{
            return request(app)
              .get('/api/order/1')
              .expect(200)
        })
    })
})