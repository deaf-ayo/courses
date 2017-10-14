// Lecture: variables ---------------------------------

/*
let name = 'John';
console.log(name);

let lastName = 'Smith';
console.log(lastName);

let age = 26;
console.log(age);

console.log(`He is ${name} ${lastName} and he is ${age} years old`);

let likesBugs = false;
console.log(likesBugs);
*/

// Lecture: variables part 2 ---------------------------------

/*
let name = 'Bojack';
let age = 52;

// console.log(name + age);
//console.log(age + age);

let job, isMarried;

// console.log(job);

job = 'sitcom star';
isMarried = false;

console.log(name + ' is a ' + age + ' years old, former ' + job + '. Is he married? ' +isMarried + '.');

age = 'fifty two';
job = 'unemployed';

console.log(name + ' is a ' + age + ' years old and he is ' + job + '. Is he married? ' +isMarried + '.');

let watchedShow = prompt('Have you seen the Bojack Horseman show?');
console.log(watchedShow);
alert('Your answer: ' + watchedShow);
*/

// Lecture: operators ---------------------------------

/*
let now = 2017;
let birthYear = now - 52;
birthYear = now - 52 * 2;
// 2017 - 52;
// 1965
console.log(birthYear);

let ageGoat = 7;
let ageSheep = 5;

ageGoat =  ageSheep = (3 + 5) * 4 - 6;
// ageGoat = ageSheep = 26
// ageGoat = 26
ageGoat++;
ageSheep *= 2;
console.log(ageGoat);
console.log(ageSheep);
=======
console.log('Hello world!');
*/

// Lecture: if/else statements ---------------------------------

/*
let name = 'Jelly';
let age = 85;
let isWobbly = true;

if (isWobbly) {
  console.log('Oooh yaas');
} else {
  console.log('This jelly is defective!');
}
// === vs ==
if (23 == '23') {
  console.log('Beep Bop printing this out...');
}
*/

// Lecture: boolean logic and switch ---------------------------------

/*
let age = 26;
if (age < 20) {
  console.log('Teenager');
} else if (age >= 20 && age < 30) {
  console.log('Young Adult');
} else {
  console.log('Adult');
}

function doThisForMe(age) {
  if (age < 20) {
    console.log('Teenager');
  } else if (age >= 20 && age < 30) {
    console.log('Young Adult');
  } else {
    console.log('Adult');
  }
}

let job = 'teacher';

switch (job) {
  case 'teacher':
    console.log('Teacher of Art Things.');
    break;
  case 'driver':
    console.log('Driver of Zoomie Zooms.');
    break;
  case 'secret agent':
    console.log('How did you know that??? You triggered protocol 42. Too bad...');
    break;
  default:
    console.log('Nothing to see here. Move along.');
}

function alsoDoThis(job) {
  switch (job) {
    case 'teacher':
      console.log('Teacher of Art Things.');
      break;
    case 'driver':
      console.log('Driver of Zoomie Zooms.');
      break;
    case 'secret agent':
      console.log('How did you know that??? You triggered protocol 42. Too bad...');
      break;
    default:
      console.log('Nothing to see here. Move along.');
  }
}
*/

// CODING CHALLENGE 1 ---------------------------------

/*
John and a friend invented a simple game where the player with the highest value of their height (in centimeters) plus five times their age wins (what a silly game !)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score)

4. EXTRA: Add a third player and decide who wins. Hint: you will need the && operator to take the decision.
*/

// https://codepen.io/deaf-ayo/pen/NaLwqq

/*
let arr = [];
let scoreArr = [];
let maxScore;
let lineBreak = '--------------------------';

let firstChallenger = {
  name: 'John',
  height: 163,
  age: 15,
  score: null
}
let secondChallenger = {
  name: 'George',
  height: 171,
  age: 16,
  score: null
}
let thirdChallenger = {
  name: 'Kate',
  height: 158,
  age: 13,
  score: null
}

arr.push(firstChallenger, secondChallenger, thirdChallenger);
maxScore = arr[0].score;

function generateScoresAndWinner() {
  scores();
  drawSort();
  if (scoreArr.length === 1) {
    winner();
  } else {
    draw();
  }
  scoreArr = [];
}

generateScoresAndWinner();

function scores() {
  arr.forEach(function(challenger) {
    challenger.score = parseInt(challenger.height + (challenger.age * 5));
    console.log(`${challenger.name}'s score is : ${challenger.score}`);
    if (challenger.score > maxScore) {
      maxScore = challenger.score;
    }
  });
  console.log(lineBreak);
}

function winner() {
  arr.forEach(function(winner) {
    if (maxScore === winner.score) {
      console.log(`The winner is ${winner.name} with a high score of ${winner.score}`);
    }
  });
}

function drawSort() {
  arr.forEach(function(drawSort) {
    if (drawSort.score >= maxScore) {
      scoreArr.push(drawSort);
    }
  });
}

function draw() {
  console.log(`Wow, folks. It's a draw! The list of names are...`);
  console.log(lineBreak);
  scoreArr.forEach(function(challenger) {
    console.log(`${challenger.name}`);
  })
  console.log(lineBreak);
  console.log(`With a score of : ${maxScore}`);
}

// run this to check out the draw results
function testDraw() {
  let fourthChallenger = {
    name: 'Angela',
    height: 171,
    age: 16,
    score: null
  }
  arr.push(fourthChallenger);
  generateScoresAndWinner();
  scoreArr = [];
  arr.splice(3, 1);
}
*/

// Lecture: functions ---------------------------------

/*
function calculateAge(yearOfBirth) {
  let age = 2017 - yearOfBirth;
  return age;
}

let ageAdam = calculateAge(1989);
let agePeanutButter = calculateAge(1921);
let ageTodd = calculateAge(1961);
console.log(ageAdam);
console.log(agePeanutButter);
console.log(ageTodd);

function yearsUntilRetirement(name, year) {
  let age = calculateAge(year);
  let retirement = 65 - age;
  if (retirement >= 0) {
    console.log(`${name} retires in ${retirement} years`);
  } else {
    console.log(`${name} has already retired`);
  }
}

yearsUntilRetirement('Todd', 1961);
yearsUntilRetirement('OldDude', 1792);
*/

// Lecture: statements and expressions ---------------------------------
/*
// function statement
function someFun(par) {
  // code
}

// function expression
let someFun = function(par) {
  // code
}

// Expressions
3 + 4;
var x = 3;

// Statements
if ( x === 5) {
  // do this
}
*/

// Lecture: arrays ---------------------------------
/*
let names = ['John', 'Peter', 'Daredevil'];
let years = new Array(1990, 1984, 1975);
console.log(names[2]);
names[1] = 'Ben';
console.log(names);

let john =['John', 'Smith', 1990, 'teacher'];
john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if(john.indexOf('designer') === -1 ) {
  console.log('John is NOT a designer');
}

// es7 .includes
console.log(john.includes('teacher'));
*/

// Lecture: objects ---------------------------------
/*
let personOne = {
  name: 'John',
  surname: 'Smith',
  likes: ['mango', 'tea'],
  job: 'Drinker of Tea'
}
console.log(personOne.name);
console.log(personOne['surname']);
console.log(personOne.likes[1]);

let xyz = 'job';
console.log(personOne[xyz]);

personOne.surname = 'Buzzington';
personOne['job'] = 'Honey Collector'
console.log(personOne.surname, personOne.job);

let buddy = new Object();
buddy.name = 'Bud';
buddy.job = 'Coach';
console.log(buddy.name, buddy.job);
*/

// Lecture: objects and methods ---------------------------------
/*
// v1.0
let personModel = {
  name: 'John',
  surname: 'Smith',
  yearOfBirth: '1984',
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    return 2017 - this.yearOfBirth;
  }
};

// console.log(personModel.calculateAge());

// v2.0

let personModel = {
  name: 'John',
  surname: 'Smith',
  yearOfBirth: '1984',
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    this.age = 2017 - this.yearOfBirth;
  }
};

personModel.calculateAge();
console.log(personModel);

let mike = {
  yearOfBirth: 1492,
  calculateAge: function() {
    this.age = 2017 - this.yearOfBirth;
  }
};
mike.calculateAge();
console.log(mike);
*/

// Lecture: loops ---------------------------------
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//0, true, print 0, update i to 1
//1, true, print 1, update i to 2
//.
//.
//.
//9, true, prince 9, update i to 10
//10, FALSE, end loop!

let names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
for (let i = names.length-1; i >= 0; i--) {
  console.log(names[i]);
}
// while loops
let foo = 0;
while(foo < names.length) {
  console.log(names[foo], foo);
  foo++;
}

// breaks and continues

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    // break;
    continue;
  }
  console.log(i);
}
*/

// CODING CHALLENGE 2 ---------------------------------

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

let yearsArray = [1989, 1952, 1966, 2004, 2013, 1999];
let anotherYearsArray = [1824, 2002, 1924, 2016, 1953, 1042];

function printFullAge(array) {
  let agesArray = [];
  let booleanArray = [];
  array.forEach(function(year) {
    agesArray.push(2017 - year);
  });
  for (let i = 0; i < agesArray.length; i++) {
    let age = agesArray[i];
    if (age >= 18) {
      booleanArray.push(true);
      console.log(age, 'This person is of full age.');
    } else {
      booleanArray.push(false);
      console.log(age, 'This person is NOT of full age.');
    }
  }
  return booleanArray;
}

let full_1 = printFullAge(yearsArray);
let full_2 = printFullAge(anotherYearsArray);
console.log(full_1);
console.log(full_2);
