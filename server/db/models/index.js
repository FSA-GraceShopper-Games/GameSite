const User = require('./user');
const Product = require('./product');
const Review = require('./reviews.js')
const LineItem = require('./lineItem.js')
const Genre = require('./genre.js')
const Order = require('./orders.js')

LineItem.belongsTo(Product)
LineItem.belongsTo(Order)

Order.hasMany(LineItem)
Order.belongsTo(User)
User.hasMany(Order)
User.hasMany(LineItem)
LineItem.belongsTo(User)

Product.belongsTo(Genre)
Genre.hasMany(Product)

Review.belongsTo(Product)
Product.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

//  Product.findOne({
//    where: {
//      id: 1
//    }
//  }).then((product) => {
//   console.log('avgReview', product.avgReview())
//  })

module.exports = {
  User,
  Genre,
  Product,
  Review,
  LineItem
}
