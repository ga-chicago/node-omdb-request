var http = require('http');

function printError(error) {
	console.error('Got error: ' + error.message);
}

function get(movieTitle) {
	var request = http.get('http://www.omdbapi.com/?t=' + movieTitle, function(response) {
		var body = "";

		response.on('data', function(chunk){
			body += chunk;
		})

		response.on('end', function() {
			if (response.statusCode === 200) {
				var movie = JSON.parse(body);
				console.log(movie.Title);
				console.log(movie.Year);
				console.log(movie.Actors)
				console.log(' ');
			}
			else {
				printError({message: 'There was an error getting a response. The response status code was: ' + [response.statusCode]});
			}
		})
	});
}

module.exports = get;