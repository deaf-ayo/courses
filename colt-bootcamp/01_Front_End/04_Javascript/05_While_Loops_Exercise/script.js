// Exercise 1
console.log("Print all numbers between -10 and 19")
var enum1 = -10;

while(enum1 <= 19) {
    console.log(enum1);
    enum1++;
}
// Exercise 2
console.log("Print all even numbers between 10 and 40")
var enum2 = 10;

while(enum2 <= 40) {
    console.log(enum2);
    enum2+=2;
}
// Exercise 3
console.log("Print all odd numbers between 300 and 333")
var enum3 = 300;

while(enum3 <= 333) {
    if(enum3 % 2 !== 0) {
        console.log(enum3);
    }
    enum3++;
}
// Exercise 4
console.log("Print all numbers divisible by 5 and 3 between 5 and 50")
var enum4 = 5;

while(enum4 <= 50) {
    if( enum4 % 5 === 0 && enum4 % 3 === 0) {
        console.log(enum4)
    }
    enum4++;
}