var dotenv = require("dotenv").config();
var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var command = process.argv[2];
var input = process.argv[3];
console.log("---------You ran command " + command + " \nwith input " + input+"-----------");

// Concert-this Command: node liri.js concert-this <artist/band name here>

function concertThis() {
  if (command === "concert-this") {
  var queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
  console.log("");
  }
}

// Spotify-this-Song Command: node liri.js spotify-this-song '<song name here>'
function spotifyThis() {
if (command === "spotify-this-song") {
  var spotify = new Spotify(
    keys.spotify
  );
     
    spotify.search({ type: command, query: input }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     
    console.log(data); 
    });
}
}


//Movie-this Command: node liri.js movie-this '<movie name here>'
function movieThis() {
if (command === "movie-this") {
  var queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
  console.log("");
  }
}


// Do-What-It-Says Command: node liri.js do-what-it-says
function doWhatItSays() {
if (command === "do-what-it-says") {
  var queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
  console.log("");
  }
}

if (command === "do-what-it-says") {
  doWhatItSays();
}

else if (command === "movie-this") {
  movieThis();
}

else if (command === "movie-this") {
  movieThis();
}

else if (command === "spotify-this-song") {
  spotifyThis();
}

else {
  console.log("I'm sorry, I did not catch that.  Please enter an actual command");
}










