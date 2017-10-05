var li = document.getElementsByTagName("li");

for(i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function(){
        this.classList.toggle("line");
    });
}

// with forEach

/*
var li2 = document.querySelectorAll("li");

li2.forEach(function(x){
    x.addEventListener("click", function(){
        this.classList.toggle("line");
    });
});
*/