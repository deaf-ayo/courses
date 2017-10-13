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
  drawSort()
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