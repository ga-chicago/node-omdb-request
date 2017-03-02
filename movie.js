function get(movieTitle){
	var https = require('https');
	
	var request = https.get('https://www.omdbapi.com/?t=' + movieTitle , function(responce){
		console.log("we got a responce")
		var body = "";
		responce.on('data', function(chunk){
			body += chunk;
			console.log('Body: '+ body);
		});
		//console.log(body);
	});

}
module.exports.get = get;

//get("Dinosaur");