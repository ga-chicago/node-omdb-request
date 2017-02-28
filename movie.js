var http = require('http');

function getMovies(mt) {
	console.log(mt);
	var queryString = 'http://www.omdbapi.com/?s=' + mt; 
	var response = http.get(queryString, function(response) {

		var whatCameBack = ''

		response.on('data', function(chunk) {
			if(response.statusCode===200) {
			//	console.log('got a chunk');
				whatCameBack += chunk;
			} else {
				console.log('there was an error');
				console.log('and the status code was ' + response.statusCode);
			}
		});
		response.on('end', function() {
//			console.log(whatCameBack);
			var jWhatCameBack = JSON.parse(whatCameBack);
//			console.log(jWhatCameBack);
//			console.log("Response status code: " + response.statusCode);
			console.log("\n\nFor your search, " + mt + ", I found: ")

			if(jWhatCameBack.Response !== 'False') { //had to add a conditional because it still gives a 200 if movie is not found
				for(var i = 0; i < jWhatCameBack.Search.length; i++) {
					console.log(jWhatCameBack.Search[i].Title + " (" + jWhatCameBack.Search[i].Year + ")");
				}
			} else {
				console.log("NOTHING!!! DUDE!!! IT'S NOT IN THE DATABASE");
			}

		});

	});

}


module.exports.get = getMovies;