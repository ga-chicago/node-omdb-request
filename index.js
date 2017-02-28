var movie = require("./app.js");
var threeFavouriteMovies = ["Fight Club", "La La Land", "High Tension"];
threeFavouriteMovies.forEach(function(film){
  // your code here
  movie.get(film)
})