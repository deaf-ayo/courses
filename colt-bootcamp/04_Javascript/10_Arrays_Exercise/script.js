// Exercise 1
 console.log("Input an argument like so printReverse([1,2,3,4,5])");
// ------------------
function printReverse(a) {
    for(i = a.length-1; i >= 0; i--) {
        console.log(a[i]);
    }
}
// ------------------
console.log(printReverse([1,2,3,4,5]));
// Exercise 2
 console.log("Input an argument like so isUniform([3,3,3,3])")
// ------------------
function isUniform(b) {
    var firstItem = b[0];
    for(i = 1; i < b.length; i++) {
        if(b[i] !== firstItem ) {
            return false;
        }
    }
    return true;
}
// ------------------
console.log(isUniform([3,3,3,3]));
// Exercise 3
 console.log("Input an argument like so sumArray([2,4,6,8,10])");
// ------------------
function sumArray(c) {
    var sum = c[0]; // 2
    for(i = 1; i < c.length; i++) {
        sum += c[i];
    }
    console.log(sum);
}
// ------------------
console.log(sumArray([2,4,6,8,10])); // 30
// Exercise 4
 console.log("Input an argument like so max([13,42,8,27])")
// ------------------
function max(d) {
    var result = d[0];
    d.forEach(function(x) {
        if(x > result) {
            result = x;
        }
    });
    return result;
}
// ------------------
console.log(max([13,42,8,27]));