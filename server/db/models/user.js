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

const passwordFallback = (user, options) => {
    if (user.googleId) {
        user.password = 'null'
    }
}

User.beforeValidate(passwordFallback)

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
    return User.encryptPassword(candidatePwd, this.salt) === this.password
  }

  /**
   * classMethods
   */
  User.generateSalt = function () {
    return crypto.randomBytes(16).toString('base64')
  }

  User.encryptPassword = function (plainText, salt) {
    return crypto.createHash('sha1').update(plainText).update(salt).digest('hex')
  }

  /**
   * hooks
   */
  const setSaltAndPassword = user => {
    if (user.changed('password')) {
      user.salt = User.generateSalt()
      user.password = User.encryptPassword(user.password, user.salt)
    }
  }

  User.beforeCreate(setSaltAndPassword)
  User.beforeUpdate(setSaltAndPassword)
