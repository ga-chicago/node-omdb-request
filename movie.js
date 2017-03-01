var https = require('https')

function movies(movieTitle){
	var request = https.get('https://www.omdbapi.com/?t=' + movieTitle, function(response){

		var body = "";
		response.on('data', function(chunk){
			// console.log('body: ' + chunk)

			body += chunk 
		}),

		response.on('end', function(){
			if(response.statusCode === 200){
				var movie = JSON.parse(body);
				console.log("My favorite movie is " + "" + movie.Title)
	}else{
		console.log('error', response.error)
		
	}
	})
})