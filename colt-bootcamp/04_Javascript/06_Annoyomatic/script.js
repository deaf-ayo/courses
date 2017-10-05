// V1
// var annoy = prompt("Are we there yet?");
// while(annoy !== "yes" && annoy !== "yeah") {
//   var annoy = prompt("Are we there yet?");
// }
// alert("Yo, we made it!");

// V2
var annoy = prompt("Are we there yet?");
while(annoy.indexOf("yes") === -1) {
    var annoy = prompt("Are we there yet?");
}

alert("Yo, we made it!");