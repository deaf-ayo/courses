function greet(firstname, lastname, language = 'en') {
  language === 'en' ? console.log(`Hello ${firstname}`) : console.log(`Hola ${firstname}`);
}

function greetEnglish(firstName, lastName) {
  greet(firstName, lastName, 'en');
}

function greetSpanish(firstName, lastName) {
  greet(firstName, lastName, 'es');
}

greet('John', 'Doe', 'es');
greet('John', 'Doe', 'en');

greetEnglish('Mike', 'Cole');
greetSpanish('Mike', 'Cole');