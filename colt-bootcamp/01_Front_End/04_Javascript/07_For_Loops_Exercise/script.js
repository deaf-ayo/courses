// Exercise 1
console.log("Print all numbers between -10 and 19");
for(a = -10; a <= 19; a++) {
    console.log(a);
}
// Exercise 2
console.log("Print all even numbers between 10 and 40");
for(b = 10; b <= 40; b++) {
    if(b % 2 === 0) {
        console.log(b);
    }
}
// Exercise 3
console.log("Print all odd numbers between 300 and 333");
for (c = 300; c <= 333; c++) {
    if(c % 2 !== 0) {
        console.log(c);
    }
}
// Exercise 4
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for(d = 5; d <= 50; d++) {
    if(d % 5 === 0 && d % 3 === 0) {
        console.log(d);
    }
}
// Bonus Problem 1
console.log("While Loop: Print out all even numbers between 1 and 50");
var whileLoop = 1;

while(whileLoop <= 50) {
    if(whileLoop % 2 === 0) {
        console.log(whileLoop);
    }
    whileLoop++;
}
console.log("For Loop: Print out all even numbers between 1 and 50");
for(forLoop = 1; forLoop <= 50; forLoop++) {
    if(forLoop % 2 === 0) {
        console.log(forLoop);
    }
}
// Bonus Problem 2
console.log("ASCII art triangle");
var tLine = Number(prompt("How tall do you want your triangle to be? Enter a number"));

for(a = 1; a <= tLine; a++) {
    console.log("$".repeat(a));
}
// Bonus Problem 3
console.log("Bonus Problem: Fizzbuzz");
for(n = 1; n <= 100; n++) {
	if(n % 3 === 0 && n % 5 === 0) {
		console.log("Fizzbuzz");
	}
	else if(n % 3 === 0) {
		console.log("Fizz");
	}
	else if(n % 5 === 0) {
		console.log("Buzz");
	}
	else {
		console.log(n);
	}
}