var movie = require("./movie.js");
var threeMoviesThatAreKindaRandom = ["a+little+princess", "one+flew+over+the+cuckoo's+nest", "oklahoma!"];


threeMoviesThatAreKindaRandom.forEach(function(film){
	var movieTitle = film;
	movie.get(movieTitle);
})
