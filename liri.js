require("dotenv").config();
var keys = require("./keys.js");
var inquirer = require("inquirer");
inquirer.prompt([

    {
      type: "input",
      name: "song",
      message: "Welcome to Liri! This app allows you to search Spotify for a song and get the artist's name, the song's name, a preview link of the song on Spotify, and the album that the song is from.  Please begin your search by entering: node liri.js spotify-this-song '<song name here>'  into the command line."
    },
    ]).then(function(data) {
    var spotify = new spotify({
        id: c08c180f0d24123a962acddf546174f,
        secret: c08c180f0d24123a962acddf546174f
      });
       
      spotify.search({ type: 'track', query: user.song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
    })









