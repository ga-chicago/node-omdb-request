var https = require('https')

	function getMovieTitle(){
	var request = https.get('http://www.omdbapi.com/?' + title, function(response){
		var movieData = "";
		response.on("data", function(dataChunk){
			movieData += dataChunk;
		})		
		response.on('end', function(){
			if(response.statuscode === 200){
				var director = JSON.parse(movieData)
				var actors = JSON.parse(movieData)
				var year = JSSON.parse(movieData)
				var plot = JSON.parse(movieData)
					console.log("The" + year + " film, featuring: " + actors + ' Directed by ' + director )
			}else{
				console.log('there was an error')
				printError({message: "There was an error getting a response the Response status code was:"  
   					+ response.statusCode})
			}
		})
	})
}

// module.exports.get = getMovieTitle(); 

// movie.js

// The movie file will contain a Module.
// This module should export a function named get(movieTitle).
// get(movieTitle) should make a request to OMDB with the movieTitle as an argument.
// You should console.log your output.
// You should test this to verify it works!