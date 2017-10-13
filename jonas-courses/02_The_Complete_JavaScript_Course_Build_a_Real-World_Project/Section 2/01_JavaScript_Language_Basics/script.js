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
