// Lecture: variables

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

// Lecture: variables part 2

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

// Lecture: operators

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