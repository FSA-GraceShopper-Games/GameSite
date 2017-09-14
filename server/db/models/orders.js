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
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
})
module.exports = Order