const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

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
    }
})

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