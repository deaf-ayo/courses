function greet(whatToSay) {
  return function(name) {
    console.log(`${whatToSay} ${name}`);
  }
}

let sayHi = greet('Hi');
sayHi('Tony');