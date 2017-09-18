const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('The `Product` model', () => {
  before(() => {
    return db.sync({force: true})
  })

  var product

  var description = 'Humanity’s last safe city has fallen to an overwhelming invasion force, led by Ghaul, the imposing commander of the brutal Red Legion. He has stripped the city’s Guardians of their power, and forced the survivors to flee. You will venture to mysterious, unexplored worlds of our solar system to discover an arsenal of weapons and devastating new combat abilities. To defeat the Red Legion and confront Ghaul, you must reunite humanity’s scattered heroes, stand together, and fight back to reclaim our home.'

  var image = 'https://images-na.ssl-images-amazon.com/images/I/81HN-LRbfIL._AC_SL1500_.jpg'

  beforeEach(() => {
    product = Product.build({
      name: 'Destiny',
      description: description,
      image: image,
      price: 50
    })
  })

  // afterEach(() => {
  //   return db.sync({force: true})
  // })

  describe('attributes definition', () => {
    it('includes `name`, `description`, `image` and `price` fields', function () {
      return product.save()
      .then(savedProduct => {
        expect(savedProduct.name).to.equal('Destiny')
        expect(savedProduct.description).to.equal(description)
        expect(savedProduct.image).to.equal(image)
        expect(savedProduct.price).to.equal(50)
      })
    })
  })

  it('requires `name`', () => {
    product.name = null

    return product.validate()
    .then(() => {
      throw new Error('validation should fail when name is null')
    },
    result => {
      expect(result).to.be.an.instanceOf(Error)
    })
  })

  it('can handle long `description`', () => {
    return product.save()
    .then(savedProduct => {
      expect(savedProduct.description).to.have.lengthOf(506)
    })
  })
})
