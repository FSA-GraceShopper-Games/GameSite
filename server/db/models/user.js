const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: 'http://assets2.ignimgs.com/2014/11/04/destinyjpg-eb5dee_1280w.jpg',
        validate: {
            isUrl: true
        }
    },
    introduction: {
        type: Sequelize.TEXT
    },
    salt: {
        type: Sequelize.STRING
    },
    googleId: {
        type: Sequelize.STRING
    }
})

module.exports = User
