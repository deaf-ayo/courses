// Exercise 1
console.log("Input a number like so isEven(4)")
function isEven(a) {
    if(a % 2 === 0) {
        return "True!";
    }
    else {
        return "False!";
    }
}
console.log(isEven(4));
//  can also do it this way as shortcut - didn't think of this - shown by Colt
//  function isEven(num) {
//      return num % 2 === 0;
//  }
// Exercise 2
console.log("Input a number like so factorial(6)")
function factorial(b) {
    var sum = 1;
    if(b === 0) {
        return 1;
    } else {
        for(i = 2; i <= b; i++) {
            sum*=i;
        }
        return sum;
    }
}
console.log(factorial(6));
// Exercise 3
console.log("Input words like so kebabToSnake(\"Hello-this-is-an-example\")")
function kebabToSnake(c) {
    var snake = c.replace(/-/g, "_");
    return snake;
}
console.log(kebabToSnake("Hello-this-is-an-example"));