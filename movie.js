var http = require('http');

function get(movieTitle){
	var request = http.get('http://www.omdbapi.com/?t=' + movieTitle, function(response){
		//console.log('got response ' + response.statusCode)
		var body = '';

		response.on('data', function(chunk){
			body += chunk;
		})
		response.on('end', function(){
			if(response.statusCode === 200){
				var movie = JSON.parse(body);
				console.log("This movie is: " + movie.Title);
			} else {
				printError({message: 'There was an error getting a response, the response status code was: ' + response.statusCode})
			}
		})
	})
}

module.exports.get = get;
