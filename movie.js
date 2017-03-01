var https = require('https');

function getMovieTitle(movieTitle){
  console.log(movieTitle);
  var search = ('https://www.omdbapi.com/?t=' + movieTitle);
  var response = https.get(search, function(response){

    var result = '';

    response.on('data', function(chunk){
      result += chunk
  });
  response.on('end', function(){
    if (response.statusCode === 200) {
      var movie = JSON.parse(result);
        console.log(result);
        console.log('for the search, I found ' + movieTitle);
      }else {
        console.log('error error errrrrorrr');
      }
  })
})
}



module.exports.get = getMovieTitle;
