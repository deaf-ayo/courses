// Movie Database
var movieDB = [
    {title: "Mad Max",
     rating: 7.0,
     hasWatched: true
     },
    {title: "Pulp Fiction",
      rating: 9.2,
      hasWatched: true
     },
    {title: "Queenie's Adventures",
     rating: 8.9,
     hasWatched: false
    },
    {title: "Finding Nemo",
     rating: 8.1,
     hasWatched: false
     },
     {title: "Django Unchained",
     rating: 8.3,
     hasWatched: true
     },
];

// Loop over Database and print to console
console.log("---- for loop ----");
for(i = 0; i < movieDB.length; i++) {
    var enDash = " - ";
    var stars = " stars";
    if(movieDB[i].hasWatched) {
         console.log("You have watched " + "\"" + movieDB[i].title + "\"" + enDash + movieDB[i].rating + stars);
    } else {
        console.log("You haven't seen " + "\"" + movieDB[i].title + "\"" + enDash + movieDB[i].rating + stars);
    }
}

// forEach loop as shown by Colt
console.log("---- forEach loop ----");
movieDB.forEach(function(x){
    var enDash = " - ";
    var stars = " stars";
    if(x.hasWatched) {
         console.log("You have watched " + "\"" + x.title + "\"" + enDash + x.rating + stars);
    } else {
        console.log("You haven't seen " + "\"" + x.title + "\"" + enDash + x.rating + stars);
    }
});