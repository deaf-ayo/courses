var age = Number(prompt("What is your age in years?"));

console.log("You are " + age + " years old");

if(age < 0) {
    console.log("Error! Unexpected value!");
    alert("Error! Unexpected value!");
}

if(age === 21) {
    console.log("Happy Birthday!");
    alert("Happy Birthday!");
}

if (age % 2 === 1) {
    console.log("Your age is odd!");
    alert("Your age is odd!");
}

if (Number.isInteger(Math.sqrt(age))) {
    console.log("Perfect Square");
    alert("Perfect Square!");
}

// proud of this solution
// first it returns square root of a number
// then it checks if the number is whole
// if it's whole - print perfect square