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

    it('has the name Destiny', () => {
        expect(destiny.name).to.be.equal('Destiny')
    })
})