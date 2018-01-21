// function statement
function greet(name) {
  console.log(`Hello ${name}`);
}

greet('John');

// function expression
let greetFunc = function(name) {
  console.log(`Hello ${name}`);
};

greetFunc('Ben');

// Immediately Invoked Function Expression (IIFE)
let greeting = function(name) {
  return `Hello ${name}`;
}('Mike');

console.log(greeting);

// IIFE
let firstName = 'Luke';
(function(name) {
  let greeting = 'Inside IIFE: Hello';
  console.log(`${greeting} ${name}`);
}(firstName));