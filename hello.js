const {add,sub} = require('./math.js') // if a js object is returned by the module
// const add = require('./math.js') ----> only one method is returned by the module
const mod = require('fs');
console.log("Hello world");
console.log(add(2,5))
console.log(sub(2,5))

console.log(mod)