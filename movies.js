var http= require('http');

var movieTitle = "";

function getMovieTitle(title){
	var request= http.get('http://www.omdbapi.com/?t=' + title, function(response){
	console.log('got response' + response.statusCode)
	var body = "";

	response.on('data', function(chunk){
		body += chunk
	})	
	response.on('end', function(){
		if(response.statusCode === 200){
			var movie = JSON.parse(body)
			// console.log(movie)
			console.log("My favorite movie is" + "" + movie.Title)
		}else{
			console.log('error', response.error)
		}
	})
	})
	

}

// getmovieTitle();
module.exports.get = getMovieTitle;