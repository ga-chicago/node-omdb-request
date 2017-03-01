var movie = require("./movie.js");

var threeFavMovies = [Pulp Fiction, Django, Running Scared];

threeFavMovies.forEach(function(film){
	movie.get(film);
	
})