// '/api/genre/'
const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Genre = db.model('genre')

describe('Genre routes', () => {
    beforeEach(()=> {
        return db.sync({force:true})
    })

    describe('/api/genre/', ()=>{

        beforeEach(()=>{
            return Genre.create({
                name: 'RPG'
            })
        })

        it('GET /api/genre', () => {
            return request(app)
              .get('/api/genre')
              .expect(200)
              .then(res => {
                  expect(res.body).to.be.an('array')
                  expect(res.body[0].name).to.be.equal('RPG')
              })
        })
    })
})