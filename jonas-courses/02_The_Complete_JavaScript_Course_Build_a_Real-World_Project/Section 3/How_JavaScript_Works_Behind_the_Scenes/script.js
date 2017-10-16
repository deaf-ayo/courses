// Lecture: hoisting ---------------------------------

// functions
calculateAge(1974);
function calculateAge(year) {
  console.log(2017 - year);
}

// retirement(1989);
let retirement = function(year) {
  console.log(65 - (2017 - year));
}

// variables
console.log(age);
let age = 23;

function foo() {
  console.log(age);
  let age = 57;
  console.log(age);
}
foo();
console.log(age);