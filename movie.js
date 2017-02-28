var http = require("http");

//http://www.omdbapi.com/?t=muriel's+wedding&y=&plot=short&r=json

function getMovie(movieTitle) {
	var request = http.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json", function(response) {
			var body = "";
			response.on("data", function(chunk) {
				// console.log("BODY: " + chunk);
				body += chunk;
			})
			response.on("end", function() {
				var over = JSON.parse(body);
				console.log("TITLE: " + over.Title);
				console.log("PLOT: " + over.Plot)
			})
		})
};

module.exports.getMovie = getMovie;

// getMovie("The Fast and The Furious");