// NodeJs uses CommonJs library under the hood, every file is module (by default)
// modules - encapsulated code (only share minimum(what we want) )

// to access the shared modules, we have to use require()
// no. of levels = no. of dots

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternate-flavor')
require('./7-mind-grenade')

console.log(data)

// sayHi('susan')
// sayHi(john)
// sayHi(peter)
// still the above function causes error, so we shoul do destructuring

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

// there is another way of exporting it is in alternate-flavor.js