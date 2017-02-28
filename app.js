var https = require('https');

function movies(movieTitle){
	var request = https.get("https://www.omdbapi.com/?t=" + movieTitle, function(res){
		// console.log('res is ' + res.statusCode);
		var body = "";
		res.on('data', function(bits){
			body += bits
			// console.log(body);
		})
		res.on('end', function(){
			if (res.statusCode === 200){
				var movie = JSON.parse(body);
				console.log(body);
			}
			else{
				console.log('error');
			}
		})
	})
}


module.exports.get = movies;