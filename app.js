var movieApp = require('./movie.js');

var threeFavouriteMovies = ['heat','collateral','interstellar'];

threeFavouriteMovies.forEach(function(film){
	movieApp.get(film)
})