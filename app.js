var movie = require("./movie");
var threeFavouriteMovies = ["Clue", "Suicide Squad", "American Sniper"];
threeFavouriteMovies.forEach(function(film){
  // your code here
  movie.get(film);
})
