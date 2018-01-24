let a = 3;
console.log(typeof a);

let b = 'Hello';
console.log(typeof b);

let c = {};
console.log(typeof c);

let d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

let e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

let z = function() { };
console.log(typeof z);

