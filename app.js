var movie = require('./movie');

// movie.get('Moonlight'); //test

var threeFavoriteMovies = ['Moonlight', 'Manon du Source', 'Inside Out', 'Manon of the Spring'];
//var threeFavoriteMovies = ['Moonlight', 'Manon du Source', 'Inside Out'];
threeFavoriteMovies.forEach(function(film) {
	movie.get(film);
});