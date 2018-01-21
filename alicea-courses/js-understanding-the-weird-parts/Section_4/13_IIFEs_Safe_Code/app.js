// IIFE
let firstName = 'John';

(function(global, name) {
  let greeting = 'Hello';
  global.greeting = 'Hello';
  console.log(`${greeting} ${name}`);
}(window, firstName));

console.log(greeting);