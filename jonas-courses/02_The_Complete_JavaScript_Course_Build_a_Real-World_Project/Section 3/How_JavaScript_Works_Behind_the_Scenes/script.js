// Lecture: hoisting ---------------------------------

// functions
/*
calculateAge(1974);
function calculateAge(year) {
  console.log(2017 - year);
}

// retirement(1989);
let retirement = function(year) {
  console.log(65 - (2017 - year));
}
*/

// variables
/*
console.log(age);
let age = 23;

function foo() {
  console.log(age);
  let age = 57;
  console.log(age);
}
foo();
console.log(age);
*/

// Lecture: scoping ---------------------------------

// scoping example
/*
let a = 'Hello! ';
first();

function first() {
  let b = 'Hi! ';
  second();

  function second() {
    let c = 'Hey!';
    console.log(a + b + c);
  }
}
*/

// Example to show the difference between execution stack and scope chain

/*
let a = 'Hello! ';
first();

function first() {
  let b = 'Hi! ';
  second();

  function second() {
    let c = 'Hey!';
    third();
  }
}

function third() {
  let d = 'John';
  // console.log(c);
  console.log(a + d);
}
*/

// Lecture: the 'this' keyword ---------------------------------

// console.log(this);

/*
calculateAge(1921);

function calculateAge(year) {
  console.log(2017 - year);
  console.log(this);
}
*/

let diane = {
  name: 'Diane',
  yearOfBirth: 1854,
  calculateAge: function() {
    console.log(this);
    console.log(2017 - this.yearOfBirth);
    /*
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
    */
  }
}

diane.calculateAge();

let mike = {
  name: 'Mike',
  yearOfBirth: 467,
}

mike.calculateAge = diane.calculateAge;
mike.calculateAge();