// ----- lecture: let and const -----

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);// ES5
*/

/*
// ES5
function driversLicence5(passedTest) {
  if (passedTest) {
    console.log(firstName);
    var firstName = 'John';
    var yearOfBirth = 1990;

    // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {

  // console.log(firstName);
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    let firstName = 'John';
    // const yearOfBirth = 1990;

    // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);


let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
*/

// ----- lecture: blocks and IIFEs  -----

/*
{
  const a = 1;
  let b = 2;
  var c = 3;
}

console.log(c);

// console.log(a + b);

// ES5

(function() {
  var c = 3;
})();

// console.log(c);
*/

// ----- lecture: strings  -----

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2017 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('Dx'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(20));
*/

// ----- lecture: arrow functions  -----

/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2017 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2017 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

testArFN = () => console.log('Whoa!');
testArFN();

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/

// ----- lecture: arrow functions 2  -----

// ES5
/*
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
}

box5.clickMe();
*/

// ES6
/*
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      let str = `This is box number ${this.position} and it is ${this.color}`;
      alert(str);
    });
  }
}

box6.clickMe();
*/

/*
const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', () => {
      let str = `This is box number ${this.position} and it is ${this.color}`;
      alert(str);
    });
  }
}

box66.clickMe();
*/

/*
function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this));
  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map((el) => `${this.name} is friends with ${el}`);
  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('Mike').myFriends6(friends);
*/

// ----- lecture: destructuring  -----

/*
// ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6

const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
  firstName: 'John',
  lastName: 'Smith'
}

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);
*/

/*
function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age]
}

const [age, retirement] = calcAgeRetirement(1989);
console.log(age);
console.log(retirement);
*/

// ----- lecture: arrays  -----

/*
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
});
*/

// ES6

/*
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/

// ES5
/*
for(var i = 0; i < boxesArr5.length; i++) {
  if(boxesArr5[i].className === 'box blue') {
    continue;
  }

  boxesArr5[i].textContent = 'I changed to blue!';
}
*/

// ES6

/*
for(const cur of boxesArr6) {
  if(cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = 'I changed to blue!';
}
*/

// --

/*
// ES5

var ages = [12, 17, 8, 21, 14, 11, 72];

var full = ages.map(function(cur) {
  return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

console.log(ages.filter(cur => cur >= 18));
*/

// ----- lecture: spread operator  -----

/*
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6

const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

// ----- lecture: rest parameters  -----

/*
// ES5
function isFullAge5() {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
    console.log(2017 - cur >= 18);
  });
}

//isFullAge5(1990, 1995, 1965);
//isFullAge5(1990, 1995, 1965, 2016, 1986);

// ES6

function isFullAge6(...years) {
  //console.log(years);
  years.forEach(cur => console.log((2017 - cur) >= 18));
}

isFullAge6(1990, 1995, 1965, 2016, 1986);
*/

/*
// ES5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur) {
    console.log(2017 - cur >= limit);
  });
}

//isFullAge5(21, 1990, 1995, 1965);
//isFullAge5(1990, 1995, 1965, 2016, 1986);

// ES6

function isFullAge6(limit, ...years) {
  //console.log(years);
  years.forEach(cur => console.log((2017 - cur) >= limit));
}

isFullAge6(24, 1990, 1995, 1965, 2016, 1986);
*/

// ----- lecture: default parameters  -----

/*
// ES5

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationality === undefined ? nationality = 'American' : nationality = nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
*/

// ES6

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}


var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
