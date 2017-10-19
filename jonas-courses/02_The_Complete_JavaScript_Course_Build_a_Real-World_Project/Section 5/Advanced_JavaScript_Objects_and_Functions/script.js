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

/*
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
*/

// Passing functions as arguments -----------------------

/*
let years = [1990, 1965, 1937, 2005, 1998, 2014];

function arrayCalc(arr, fn) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2017 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if(el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);
console.log('ages', ages);
console.log('fullAges', fullAges);
console.log('maxHeartRate', rates);
*/

// Functions returning functions -----------------------

/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(`${name}, can you please explain what UX design is?`);
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log(`What subject do you teach, ${name}?`);
    }
  } else {
    return function(name) {
      console.log(`Hello ${name}, what do you do?`);
    }
  }
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');

interviewQuestion('teacher')('Adam');
*/

// IIFE : Immediately Invoked Function Expressions -----------------------

/*
function game() {
  let score = Math.random() * 10;
  console.log(score >= 5);
}
game();
*/

(function () {
  let score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
  let score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
