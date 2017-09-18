const {expect} = require('chai')
const db = require('../index')
const Genre = db.model('genre')

describe('Genre Model', () => {
    beforeEach(() => {
      return db.sync({force: true})
  })

    let category

    beforeEach(()=>{
        return Genre.create({
            name: 'rpg'
        })
         .then(genre => {
            category = genre
         })
    })
    it('returns the name of the category', () => {
        expect(category.name).to.be.equal('rpg')
    })
})