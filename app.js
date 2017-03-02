var movie = require("./movie.js");
var threeFavouriteMovies = ["Dinosaur", "moana", "Dinosaur"];
threeFavouriteMovies.forEach(function(film){
  // your code here
  movie.get(film);
})