function greet(fname, lname, lang = 'en') {
  // language = language || 'en';

  if (arguments.length === 0) {
    console.log('Missing parameters!');
    console.log('----------');
    return;
  }
  console.log(fname);
  console.log(lname);
  console.log(lang);
  console.log(arguments);
  console.log(`arg 0: ${arguments[0]}`);
  console.log('----------');
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');

function testRest(...rest) {
  for (let el of rest) {
    console.log(el);
  }
}

testRest('This', 'is', 'a', 'rest!');