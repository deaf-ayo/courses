let person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: () => `${this.firstName} ${this.lastName}`
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
}

// don't do this EVER! demo purposes only
john.__proto__ = person;

for (let prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(`${prop}: ${john[prop]}`);
  }
}

let jane = {
  address: '111 Main St',
  getFormalFullName: () => `${this.lastName}, ${this.firstName}`
}

let jim = {
  getFirstName: () => firstName
}

// alternative to underscore: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
_.extend(john, jane, jim);
console.log(john);
// Object.assign
let extend = Object.assign({}, john, jane, jim);
console.log(extend);