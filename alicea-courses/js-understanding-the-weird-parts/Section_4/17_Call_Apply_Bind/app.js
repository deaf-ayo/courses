let person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    let fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }
}

let logName = function(lang1, lang2) {
  console.log(`Logged: ${this.getFullName()}`);
  console.log(`Arguments: ${lang1} ${lang2}`);
  console.log(`-----------`);
}

let logPersonName = logName.bind(person);

logPersonName('en', 'es');

logName.call(person, 'en', 'es');

logName.apply(person, ['en', 'es']);

// ---

(function(lang1, lang2) {
  console.log(`Logged: ${this.getFullName()}`);
  console.log(`Arguments: ${lang1} ${lang2}`);
  console.log(`-----------`);
}).apply(person, ['bsl', 'en']);

// function borrowing
let person2 = {
  firstName: 'Jane',
  lastName: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
  return a * b;
}

let multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(3));