var request = require('request');

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

// https://developer.yahoo.com/weather/
console.log("Sunset in Hawaii is at...");
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log("The time below!");
        console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
    }
});

// a simple blueprint
// wwwx.google to catch the error instead of spitting out the html/json

request("http://wwwx.google.com", function(error, response, body){
  if(error) {
    console.log("Something went wrong!");
    console.log(error);
  } else {
    if(response.statusCode == 200) {
      // things worked!
      console.log(body)
    }
  }
});