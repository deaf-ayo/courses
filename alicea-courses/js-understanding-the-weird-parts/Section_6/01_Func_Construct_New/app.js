function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  console.log('This function is invoked.');
}

let john = new Person('John', 'Doe');
console.log(john);

let jane = new Person('Jane', 'Doe');
console.log(jane);

// es6

class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const es6Person = new Person2('Mike', 'Doe');
console.log(es6Person);