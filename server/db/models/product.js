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

module.exports = Product
