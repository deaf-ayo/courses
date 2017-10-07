var faker = require("faker");

function genList(num) {
  for(var i = 1; i <= num; i++) {
    console.log(faker.fake("{{commerce.productName}}, {{commerce.price}}" ));
  }
}

console.log("===================")
console.log("Welcome to My Shop!")
console.log("===================")
genList(10);



