var http = require('http');

function getMovie(title) {
	var movie = 'http://www.omdbapi.com/?t=' + title.split(" ").join("+")
	var movieLog = http.get(movie);
	console.log(movieLog);
}

module.exports.getMovie = getMovie;