var movieTitles = require('./movies.js');
console.log(movieTitles.get)


var threeFavouriteMovies = ["Harry Potter", "Neverending Story", "Love Actually"];

threeFavouriteMovies.forEach(function(film){
	// console.log(threeFavouriteMovies[film]);
	
	movieTitles.get(film)
	
})