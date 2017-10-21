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


(function () {
  let score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
  let score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/

// Closures -----------------------

/*
function retirement(retirementAge) {
  let a = ' years left until retirement.';
  return function(yearOfBirth) {
    let age = 2017 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

let retirementUS = retirement(66);
let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementUS(1989);
retirementGermany(1989);
retirementIceland(1989);

// retirement(70)(1989);

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(`${name}, can you please explain what UX design is?`);
    } else if (job === 'teacher') {
    console.log(`What subject do you teach, ${name}?`);
    } else {
      console.log(`Hello ${name}, what do you do?`);
    }
  }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Jane');
interviewQuestion(null)('Bob');
*/

// Bind, call and apply -----------------------

/*
let john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log(`Good ${timeOfDay}, ladies and gentlemen! I am ${this.name}, I am a ${this.job} and I am ${this.age} years old.`);
    } else if (style === 'friendly') {
      console.log(`Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I am ${this.age} years old. Have a nice ${timeOfDay}!`);
    }
  }
}

let emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal', 'afternoon');
john.presentation('friendly', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['formal', 'morning']);

let johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('party time');
johnFriendly('evening');

let emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');

// ------

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

function isFullAge(limit, el) {
  return el >= limit;
}

let ages = arrayCalc(years, calculateAge);
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

// Coding Challenge -----------------------


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// 1

/*
let questionArray = [];

let Question = function(question, answers, correct) {
  this.question = question;
	this.answers = answers;
  this.correct = correct;
}

Question.prototype.randomQuestion = function() {
  // get a random question from question array
  let length = questionArray.length;
  let random = Math.floor(Math.random() * length);
  let randomQuestion = questionArray[random];
  let answers = randomQuestion.answers;
  let correctAnswer = randomQuestion.correct;
  console.log(randomQuestion);
  console.log(answers);
  console.log(correctAnswer);
  // prompts
  let userAnswer = prompt(`Which is the correct answer? 1) ${answers[0]}, 2) ${answers[1]} or 3) ${answers[2]}`);
  userAnswer;
  if (userAnswer - 1 !== correctAnswer) {
    console.log('Wrong answer. Try again!');
  } else {
    console.log('Correct. Well done!');
  }
}

let queenieQuestion = new Question('Is Queenie a beautiful cat?', ['Yes', 'No', 'Bork'], 0);
let bojackQuestion = new Question('Is Bojack a beautiful horse?', ['Yes', 'No', 'Neigh'], 2);

questionArray.push(queenieQuestion);
questionArray.push(bojackQuestion);
*/

(function() {
  let questionArray = [];

  let Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.randomQuestion = function() {
    let randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
    let answers = randomQuestion.answers;
    let correctAnswer = randomQuestion.correctAnswer;
    console.log(randomQuestion.question);
    answers.forEach(function(el, index) {
      console.log(`${index + 1}: ${el}`);
    });
  }

  Question.prototype.userAnswer = function() {

  }

  let queenieQuestion = new Question('Is Queenie a beautiful cat?', ['Yes', 'No', 'Bork'], 0);
  let bojackQuestion = new Question('Is Bojack a beautiful horse?', ['Yes', 'No', 'Neigh'], 2);

  questionArray.push(queenieQuestion);
  questionArray.push(bojackQuestion);

  queenieQuestion.randomQuestion();
})();