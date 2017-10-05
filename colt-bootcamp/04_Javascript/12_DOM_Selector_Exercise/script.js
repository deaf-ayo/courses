/* Exercise:
Come up with 4 different ways to select the first <p> tag */

var a = document.getElementById("first");
console.log(a);

var b = document.querySelector(".special");
console.log(b);

var c = document.querySelector("p:nth-of-type(1)");
console.log(c);

var d = document.querySelector("#first");
console.log(d);

// Colt's solutions that I missed
// document.getElementsByClassName("special")[0];
// document.querySelectorAll(".special")[0];
// document.getElementsByTagName("p")[0];