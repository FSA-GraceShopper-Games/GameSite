const {expect, assert} = require('chai')
const db = require('../index')
const Orders = db.model('order')

describe('Orders model', () => {
    beforeEach(() => {
        return db.sync({force:true})
    })

    let deliveredOrder
    let status = ['delivered', 'in-progress', 'not delivered']

    beforeEach(()=>{
        return Orders.create({
            progress: 'delivered',
            totalPrice: 50,
            date: '9/15/2017'
        })
          .then(order => {
              deliveredOrder = order
          })
    })

    it('total price is an Integer', () =>{
        assert.isNumber(deliveredOrder.totalPrice)
        expect(deliveredOrder.totalPrice).to.equal(50)
    })
    it('progress should only be equal something in status', ()=>{
        assert.include(status, deliveredOrder.progress)
    })
    it('has an order date', () =>{
        expect(deliveredOrder).to.have.property('date')
    })
})