// Function constructor -----------------------

/*
let john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
}
*/

/*
let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2017 - this.yearOfBirth);
  }

Person.prototype.lastName = 'Smith';

let john = new Person('John', 1990, 'teacher');
let jane = new Person('Jane', 1974, 'artist');
let mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName, jane.lastName, mark.lastName);

let Pet = function(name, nickname, type) {
  this.name = name;
  this.nickname = nickname;
  this.type = type;
}

Pet.prototype.meow = function() {
  console.log('MEOW!');
}

let queenie = new Pet('Queenie', 'Darling', 'Cat');
*/

// Object.create -----------------------

/*
let personProto = {
  calculateAge: function() {
    console.log(2017 - this.yearOfBirth);
  }
}

let john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

let jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1974 },
  job: { value: 'artist' }
})
*/

// Primitives vs objects -----------------------

// primitives
let a = 23;
let b = a;
a = 46;
console.log(a);
console.log(b);


// objects
let obj1 = {
  name: 'John',
  age: 26
}

let obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// functions
let age = 27;
let obj = {
  name: 'Jonas',
  city: 'Lisbon'
}

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);