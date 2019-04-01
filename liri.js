var dotenv = require("dotenv").config();
var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var command = process.argv[2];
var input = process.argv[3];
console.log("---------You ran command " + command + " \nwith input " + input+"-----------");

// inquirer.prompt([

//     {
//       type: "input",
//       name: "song",
//       message: "Welcome to Liri! This app allows you to search Spotify for a song and get the artist's name, the song's name, a preview link of the song on Spotify, and the album that the song is from.  Please begin your search by entering: node liri.js spotify-this-song '<song name here>'  into the command line."
//     },
//     ]).then(function(data) {
    var spotify = new Spotify(
      keys.spotify
    );
       
      spotify.search({ type: command, query: input }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
  









