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

/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}


var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/

// ----- lecture: maps  -----

/*
const question = new Map();
question.set('question', 'What is the latest official name of the latest Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 4);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong answer!');

console.log(question.get('question'));
//console.log(question.size);

if(question.has(3)) {
  //question.delete(3);
  //console.log('Answer 3 is here');
}

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for(let [key, value] of question.entries()) {
  if(typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Enter the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/

// ----- lecture: classes  -----

/*
// ES5

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var john = new Person5('John', 1990, 'teacher');

// ES6

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    let age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log('Hey there!');
  }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/

// ----- lecture: classes with subclasses  -----

/*
// ES5

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'Swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES6

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    let age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('John', 1989, 'Swimmer', 2, 5);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
*/

// ----- lecture: coding challenge  -----

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Town {
  constructor(name, length, year) {
    this.name = name;
    this.length = length;
    this.year = year;
  }
}

class Park extends Town {
  constructor(name, length, width, year, trees) {
    super(name, length, year);
    this.width = width;
    this.trees = trees;
  }

  age() {
    let age = new Date().getFullYear() - this.year;
    return age;
  }

  area() {
    return this.length * this.width;
  }

  treeDensity() {
    const area = this.area();
    return (this.trees / area);
  }
}

class Street extends Town {
  constructor(name, length, year, size = 'normal') {
    super(name, length, year);
    this.size = size;
  }
}

function avgAgeParks(...parks) {
  let totalAge = 0;
  parks.forEach(cur => totalAge += cur.age());
  return (totalAge / parks.length);
}

function totalLength(...streets) {
  let totalLength = 0;
  streets.forEach(cur => totalLength += cur.length);
  return totalLength;
}

function avgLength(totalLength, num) {
  return totalLength / num;
}

const parks = [
  new Park('Ocean Breeze', 98, 200, 1989, 357),
  new Park('Town Retreat', 105, 300, 1944, 718),
  new Park('Mountain Forest', 186, 500, 1887, 1016)
]

const streets = [
  new Street('Gravel Path', 10, 1987, 'small'),
  new Street('Windy Stroll', 20, 1945),
  new Street('Seaside Street', 60, 1962, 'big'),
  new Street('Town Lane', 110, 1936, 'huge')
]

console.log('---- PARKS REPORT ----');
console.log(`Our ${parks.length} parks have an average age of ${avgAgeParks(...parks)} years`);
for(const park of parks) {
 console.log(`${park.name} has a tree density ${park.treeDensity()} trees per square km.`);
}
if (parks.find(park => park.trees > 1000)) {
 console.log(`${parks.find(park => park.trees > 1000).name} has more than 1000 trees.`)
} else {
 console.log(`None of our parks has more than 1000 trees.`)
}

console.log('---- STREETS REPORT ----')
console.log(`Our ${streets.length} streets have a total length of ${totalLength(...streets)} km, with an average of ${avgLength(totalLength(...streets), streets.length)} km.`)
for (const street of streets) {
 console.log(`${street.name}, built in ${street.year} is a ${street.size} street.`)
}