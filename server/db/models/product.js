const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')
const Review = require('./reviews.js')
const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true
        },
        allowNull: false
    },
    price:  {
        type: Sequelize.INTEGER
    }
})

Product.prototype.avgReview = function() {
    console.log(this.id)
    return Review.findAll({
        where: {
            productId: this.id
        }
    }).then((reviews) => {
        console.log('first rating', reviews[0].stars)
       return reviews[0].stars
    })
}





// name: 'The Last Of Us',
// image: 'https://images-na.ssl-images-amazon.com/images/I/51fR72yjSFL._SX215_.jpg',
// description: 'Bacon ipsum dolor amet leberkas hamburger drumstick porchetta brisket. Pancetta ball tip ground round doner, drumstick tri-tip biltong spare ribs. Short loin doner ground round beef pork belly tongue brisket beef ribs sirloin picanha. Corned beef pancetta pork pork belly cow alcatra capicola, fatback doner chuck ham hock turkey tenderloin chicken. Filet mignon shoulder alcatra flank turducken turkey bacon picanha pork belly shank fatback pig. Alcatra spare ribs filet mignon capicola turkey pork. Strip steak alcatra chicken pork chop meatball.',
// price: 59.99,
// avgReview: 5

// Category.prototype.findCount = function() {
//     return Products.findAll({
//         where: {
//             categoryId: this.id
//         }
//     }).then((arr) => {
//         return arr.length
//     })
// }
module.exports = Product