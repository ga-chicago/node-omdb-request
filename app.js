
// You should then use the Array.forEach() function to loop through them.
// As you loop through them, you should call on your movie module's get(movieTitle)


var https = require('https');
// The app should require your movie module.
var movie = require("./movie");



// You should define your threeFavouriteMovies as an array.
var threeFavouriteMovies = ["Beetlejuice", "Inglorious Basterds", "Mean Girls"];
// threeFavouriteMovies.forEach(function(film){
//   if(i = 0; i >= threeFavouriteMovies.length; i++);
  	//this loops through the movies

threeFavouriteMovies.forEach(function(element){
	getMovie(element)
	//the variable will be importing the pictures by using the getMovie
	//function and the element call ---- forEach calls back
	//each element in the array --- doesn't use index properties
});

//event listener//
response.on('threeFavouriteMovies', function(){
	//callback!!
	body += threeFavouriteMovies
	})
}