const {expect, assert} = require('chai');
const db = require('../index')
const Product = db.model('product')

describe('Product model', () =>{
    beforeEach(()=>{
        return db.sync({force:true})
    })

    let destiny 

    beforeEach(()=>{
        return Product.create({
            name: 'Destiny',
            description: 'super cool game and stuff yo!',
            image: "https://upload.wikimedia.org/wikipedia/en/b/be/Destiny_box_art.png",
            price: 49
        })
        .then(game => {
            destiny = game
        })
    })
    xit('has information', () => {
        // not working for me  
        // solution:https://stackoverflow.com/questions/46082795/typeerror-assert-isnotempty-is-not-a-function-with-chai-assert
        assert.isNotEmpty(destiny) 
    })
    it('has the name Destiny', () => {
        assert.isNotNull(destiny.name)
        expect(destiny.name).to.be.equal('Destiny')
    })
    it('has a description', () => {
        assert.isNotNull(destiny.description, 'play this game!')
    })
    it('has an image', ()=>{
        assert.isNotNull(destiny.image)
    })
    it('has a price that is equal to 49', () => {
        expect(destiny.price).to.be.equal(49)
    })
})