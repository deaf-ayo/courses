"use strict";

// 1 - Select all divs and give them a purple background
$("div").css("background-color", "purple");
// 2 - Select the divs with class "highlight" and make them 200px wide
$(".highlight").css("width", "200px");
// 3 - Select the div with id "third" and give it an orange border
$("#third").css("border", "5px solid orange");
// Bonus - Select the first div only and change its font color to pink
$("div:first-of-type").css("color", "pink");