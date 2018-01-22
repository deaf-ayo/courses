let person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let john = {
  firstName: 'John',
  lastName: 'Doe'
}

// don't do this EVER! demo purposes only

john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstName);

let jane = {
  firstName: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());
// -------------------