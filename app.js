var movie = require('./movie');

var threeFavouriteMovies = ['Weird Science', 'Jay and Silent Bob Strike Back', 'Ace Ventura'];

threeFavouriteMovies.forEach(function(film) {
	movie(film);
})
