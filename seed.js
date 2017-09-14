'use strict';

var chance = require('chance')(123);
var toonAvatar = require('cartoon-avatar');
var Promise = require('bluebird');

var db = require('./server/db');

var User = require('./server/db/models').User
var Product = require('./server/db/models').Product
var Genre = require('./server/db/models').Genre

// const User, Genre, Product, Review, LineItem } = require('./server/db/models/index.js');


// Genre.create({name: 'Action'})
// Genre.create({name: 'Adventure'})
// Genre.create({name: 'Role Playing'})
// Genre.create({name: 'Simulation'})
// Genre.create({name: 'Strategy'})

console.log('userrrrrr', User)
var numUsers = 20;
var numProducts = 100; 
var numReviews = 50;


var emails = chance.unique(chance.email, numUsers);

function doTimes (n, fn) {
  var results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
}

function randPhoto (gender) {
  gender = gender.toLowerCase();
  var id = chance.natural({
    min: 1,
    max: gender === 'female' ? 114 : 129
  });
  return toonAvatar.generate_avatar({ gender: gender, id: id });
}

function randUser () {
  var gender = chance.gender();
  return User.build({
    name: [chance.first({gender: gender}), chance.last()].join(' '),
    image: randPhoto(gender),
    email: emails.pop(),
    password: chance.word(),
    introduction: 'Bresaola brisket frankfurter alcatra pork chop doner jowl. Chicken pork andouille ham, pork chop shoulder pancetta. Turducken alcatra venison chicken ground round burgdoggen. Short ribs picanha shoulder andouille sirloin filet mignon. Meatball hamburger sirloin shankle, brisket tail porchetta ham salami beef.'

  });
}

function randProduct () {
    return Product.build({
        name: chance.domain().split('.')[0],
        image: toonAvatar.generate_avatar(),
        description: 'Bacon ipsum dolor amet drumstick pastrami shankle meatball fatback pig capicola corned beef t-bone tri-tip. Cow corned beef landjaeger hamburger chuck tongue frankfurter, picanha short loin chicken pork chop shoulder venison fatback bacon. Burgdoggen beef ribs frankfurter short loin, meatball filet mignon swine biltong. Shoulder short loin sirloin turducken ham hock frankfurter doner pork chop. Corned beef turkey andouille tri-tip. Biltong filet mignon brisket tenderloin, pork loin pancetta cow beef cupim frankfurter turkey. Shankle strip steak rump pig.',
        price: chance.floating({fixed: 2, min: 20.99, max: 99.99}),
        genreId: 1
    })
}

function randTitle () {
  var numWords = chance.natural({
    min: 1,
    max: 8
  });
  return chance.sentence({words: numWords})
  .replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  })
  .slice(0, -1);
}

// function randStory (createdUsers) {
//   var user = chance.pick(createdUsers);
//   var numPars = chance.natural({
//     min: 3,
//     max: 20
//   });
//   return Story.build({
//     author_id: user.id,
//     title: randTitle(),
//     paragraphs: chance.n(chance.paragraph, numPars)
//   });
// }

function generateUsers () {
  var users = doTimes(numUsers, randUser);
  users.push(User.build({
    name: 'Zeke Nierenberg',
    image: 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/zeke-astronaut.png',
    email: 'zeke@zeke.zeke',
    password: '123',
    introduction: 'irfwinf'
  }));
  users.push(User.build({
    name: 'Omri Bernstein',
    image: 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/sloth.jpg',
    email: 'omri@zeke.zeke',
    password: '123',
    introduction: 'rrkfirf'
  }));
  return users;
}
function generateGenres() {
    var genres = []
    genres.push(Genre.build({name: 'Action'}))
    genres.push(Genre.build({name: 'Adventure'}))
    genres.push(Genre.build({name: 'Role Playing'}))
    genres.push(Genre.build({name: 'Simulation'}))
    genres.push(Genre.build({name: 'Strategy'}))
    return genres;

}



function generateProducts() {
    var products = doTimes(numProducts, randProduct)
    return products;
}

// function generateStories (createdUsers) {
//   return doTimes(numStories, function () {
//     return randStory(createdUsers);
//   });
// }

function createUsers () {
  return Promise.map(generateUsers(), function (user) {
    return user.save();
  });
}
function createProducts() {
    return Promise.map(generateProducts(), function (product) {
        return product.save();
    } )
}

function createGenres() {
    return Promise.map(generateGenres(), function (genre) {
        return genre.save();
    })
}

// function createStories (createdUsers) {
//   return Promise.map(generateStories(createdUsers), function (story) {
//     return story.save();
//   });
// }

function seed () {
  return createUsers()
    .then(() => {
        return createProducts()
    })
    .then(() => {
        return createGenres()
    })
}

console.log('Syncing database');

db.sync({force: true})
.then(function () {
  console.log('Seeding database');
  return seed();
})
.then(function () {
  console.log('Seeding successful');
}, function (err) {
  console.error('Error while seeding');
  console.error(err.stack);
})
.finally(function () {
  db.close();
  return null;
});