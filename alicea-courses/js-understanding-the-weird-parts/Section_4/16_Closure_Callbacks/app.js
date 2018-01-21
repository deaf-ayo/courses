function sayHiLater() {
  let greeting = 'Hi'
  setTimeout(function() {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {
  let a = 1000;
  let b = 2000;
  callback();
}

tellMeWhenDone(function() {
  console.log('I am done!');
});

tellMeWhenDone(function() {
  console.log('All done');
});