var movie = require("./movie");

var threeFavouriteMovies = ["Muriel's Wedding","Lilo & Stitch","The Fast and The Furious"];

threeFavouriteMovies.forEach(function(film){
  // your code here
	movie.get(film);
});