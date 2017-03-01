var https = require('https')

function getMovie(movieTitle){
	var request = https.get('https://www.omdbapi.com/?t=' + movieTitle, function(response){
		// console.log('got response ' + response.statusCode);
		var body = '';

		response.on('data', function(chunk){
			// console.log('body: ' + chunk)
			body += chunk

		})

		response.on('end', function(){
			
			if(response.statusCode === 200){
				var movie = JSON.parse(body)
				console.log(movie)
			}

			else{
				console.log('There be an err homie')
			}
		})
	})
}
		
	
	
module.exports.get = getMovie;