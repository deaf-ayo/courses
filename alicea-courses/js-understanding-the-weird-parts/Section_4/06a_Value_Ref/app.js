// by value (primitives)
let a = 3;
let b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference (all objects - including functions)
let c = { greeting: 'hi' };
let d;

d = c;
// mutate
c.greeting = 'hello';

console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
  // mutate
  obj.greeting = 'hola';
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };

console.log(c);
console.log(d);