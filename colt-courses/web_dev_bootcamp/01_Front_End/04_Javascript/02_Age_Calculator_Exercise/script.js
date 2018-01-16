var age = prompt("What is your age in years?");
// 365.25 accounts for leap years - .25 every 4 years adds an extra day
var ageCalc = age * 365.25;
var result = alert("You are roughly " + ageCalc + " days old");