const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')
const Review = require('./reviews.js')


const Order = db.define('order', {
    progress: {
        type: Sequelize.ENUM('delivered', 'in-progress', 'not delivered'),
    },
    totalPrice:  {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    }
})
module.exports = Order