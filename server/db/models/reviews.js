const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
    stars: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            max: 5,
            min: 1
        }
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comment: {
        type: Sequelize.TEXT
    }
})

module.exports = Review