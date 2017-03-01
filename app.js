var movie = require('./movie');
var threeFavouriteMovies = ['inglourious basterds', 'interstellar', 'the dark knight'];
threeFavouriteMovies.forEach(function(film){
  movie.get(film);
});
