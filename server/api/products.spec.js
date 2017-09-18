// '/api/products'
const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')
const agent = request.agent(app)

describe('Product routes', () => {
    beforeEach(()=>{
        db.sync({force:true})

        // return Product.create({
        //         name: 'Destiny',
        //         description: 'totally Awesome Game',
        //         image: 'http://vignette4.wikia.nocookie.net/video151/images/5/59/Destiny_The_Taken_King_Multiplayer_Gameplay_-_IGN_Live_E3_2015/revision/latest?cb=20150617002312',
        //         price: 50
        //     })
    })
    
    describe('/api/products', () =>{
        beforeEach(() =>{
                return Product.create({
                name: 'Destiny',
                description: 'totally Awesome Game',
                image: 'http://vignette4.wikia.nocookie.net/video151/images/5/59/Destiny_The_Taken_King_Multiplayer_Gameplay_-_IGN_Live_E3_2015/revision/latest?cb=20150617002312',
                price: 50
            })
        })
        it('GET /api/products', () =>{
            return request(app)
              .get('/api/products')
              .expect(200)
              .then(res => {
                  expect(res.body).to.be.an('array')
                  expect(res.body[0]).to.be.an('object')
              })
        })
    
    })

    describe('/api/products/:id', () => {
        // Unhandled rejection SequelizeUniqueConstraintError: Validation error
        xit('GET /api/products/:id', () => {
            return request(app)
              .get('/api/products/1')
              .then(res => {
                  expect(res.body).to.be.an('Object')
              })
        })
    })

    describe('POST /api/products', () => {
        

        xit('creates a new product', () =>{
            return agent
            .post('/api/products')
            .send({
                name: 'COD',
                descriptiont: 'FPS',
                image: 'http://www.hdwallpaperspulse.com/wp-content/uploads/2014/02/22/5t5.jpeg',
                price: 40
            })
            .expect(200)
            .expect(function (res) {
                expect(res.body.name).to.equal('COD');
                expect(res.body.id).to.not.be.an('undefined');
                expect(res.body.price).to.equal(40);
            });

        })
    })

  describe('PUT /products/:id', function () {

    var game;

    beforeEach(function () {

      return Product.create({
        name: 'FF',
        description: 'Fantasy',
        image: 'https://lh3.googleusercontent.com/6iw3PJ3j8Aj0M8VMbp6Lmtlo0BZ0Ka5y_5KYxZh6Xh_wZIzZ0nv2neVe8lLm-gHLSNf4=w300',
        price: 40
      })
      .then(function (product) {
        game = product;
      });

    });


    it('updates a product', function () {

      return agent
      .put('/products/' + game.id)
      .send({
        description: 'Epic fantasy!'
      })
      .expect(200)
      .expect(function (res) {
        expect(game.description).to.equal('Epic fantasy!');
        expect(game.id).to.not.be.an('undefined');
        expect(game.name).to.equal('FF');
      });

    });




  });
    
})

