var https = require('https');

function movies(movieTitle) {
  var request = https.get('https://www.omdbapi.com/?t=' + movieTitle, function(response) {
    // console.log('response is : ' + response.statusCode);

    var body = "";
    response.on('data', function(chunk) {
      body += chunk;
      // console.log(body);
    })
    response.on('end', function() {
      if(response.statusCode === 200) {
        var movie = JSON.parse(body);
        console.log(movie.Title + " was released in " + movie.Year + " and is rated " + movie.Rated + ".");
      }
      else {
        console.log("there is an error");
      }
    })
  })
}

module.exports.get = movies;
