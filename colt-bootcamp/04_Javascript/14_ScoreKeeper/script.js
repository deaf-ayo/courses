// -----
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var limit = document.getElementById("limit");
var input = document.getElementById("setnum");
var button = document.getElementsByTagName("button");
var i = 0; // player one button
var j = 0; // player two button
// -----
input.addEventListener("click", function(){
    var a = document.getElementById("setnum").value;
    limit.textContent = a;
});
input.addEventListener("keyup", function(){
    var a = document.getElementById("setnum").value;
    limit.textContent = a;
});
// -----
button[0].addEventListener("click", function(){
    // player one
    i++;
    p1.textContent = i;
    counterMax();
});
button[1].addEventListener("click", function(){
    // player two
    j++;
    p2.textContent = j;
    counterMax();
});
button[2].addEventListener("click", function(){
    // reset
    reset();
});
// -----
function counterMax(){
    if(p1.textContent === limit.textContent) {
        p1.classList.add("winner");
        buttonDisable();
        //
        setTimeout(function() {
            alert("Player One is the Winner!");
        }, 300);
    } else if (p2.textContent === limit.textContent) {
        p2.classList.add("winner");
        buttonDisable();
        //
        setTimeout(function() {
            alert("Player Two is the Winner!");
        }, 300);
    }
};
function buttonDisable() {
    input.disabled = true;
    button[0].disabled = true;
    button[1].disabled = true;
};
function reset() {
    i = 0;
    j = 0;
    p1.textContent = i;
    p2.textContent = j;
    limit.textContent = 1;
    input.value = 1;
    input.disabled = false;
    button[0].disabled = false;
    button[1].disabled = false;
    p1.classList.remove("winner");
    p2.classList.remove("winner");
};
// -----