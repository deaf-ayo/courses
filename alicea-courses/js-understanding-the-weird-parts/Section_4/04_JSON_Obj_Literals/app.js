let objectLiteral = {
  firstname: 'Mary',
  isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

let jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);