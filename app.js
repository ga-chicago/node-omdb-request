var moviedb = require("./movie.js");
var threeFavouriteMovies = ["The Hateful Eight", "Resevoir Dogs", "Jackie Brown"];
threeFavouriteMovies.forEach(function(film){
	moviedb.getMovie(film);
})