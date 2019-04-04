require("dotenv").config();
var fs = require("fs");
var request = require('request');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var input = process.argv[3];

function caseBreak() {

  switch (command) {

    default:                            
    console.log("Error");
    break;

    case "concert-this":
      bandInTown(input);                   
      break;                          

    case "spotify-this-song":
      spotifyThisSong(input);
      break;

    case "movie-this":
      omdb(input);
      break;

    case "do-what-it-says":
      random();
      break;
  }
};

// concert-this:

function bandInTown(input){

if ("concert-this")
{
	var artist="";
	for (var i = 3; i < process.argv.length; i++)
	{
		artist+=process.argv[i];
    }
var bands = "Bandintown"
    request(bands, function(error, data) {

        console.log(data);
    });
	 console.log(artist);
}
else
{
	artist = input;
}

var queryUrl = "https://rest.bandsintown.com/artists/"+ artist +"/events?app_id=codingbootcamp";

request(queryUrl, function(error, response, body) {

  if (!error && response.statusCode === 200) {

    var getParse = JSON.parse(body);
    for (i = 0; i < getParse.length; i++)
    {
      var dateTime = getParse[i].datetime;
        var month = dateTime.substring(5,7);
        var year = dateTime.substring(0,4);
        var day = dateTime.substring(8,10);
        var dateForm = month + "/" + day + "/" + year
  
      console.log("\n----------------------------------------------\n");
      console.log("Name: " + getParse[i].venue.name);
      console.log("City: " + getParse[i].venue.city);
      console.log("Country: " + getParse[i].venue.country);
      console.log("Date: " + dateForm);
      console.log("\n----------------------------------------------\n");

    }
  }
});
}

// spotify-this-song:
var spotify = new Spotify(keys.spotify);
function spotifyThisSong(input) {
  if (input === undefined) {
    var song = "Ace of Base The Sign";
  }

  else {
    input = song;
  }

  request(song, function(error, data) {
    if (error) {
        console.log("Error");
    }
    else{
      console.log("\n----------------------------------------------\n");
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song: " + data.tracks.items[0].name);
      console.log("Preview: " + data.tracks.items[3].preview_url);
      console.log("Album: " + data.tracks.items[0].album.name);
      console.log("\n----------------------------------------------\n");
      
  }
});
  };

// movie-this:

function omdb(input) {


  var findMovie;
  if (input === undefined) {
    findMovie = "Mr. Nobody";
  } else {
    findMovie = input;
  };

  var omdbMovie = "OMDB"
    request(omdbMovie, function(error, data) {
        if (error) {
        }
        console.log(data);
    });

  var queryUrl = "http://www.omdbapi.com/?t=" + findMovie + "&y=&plot=short&apikey=trilogy";
  
  request(queryUrl, function(error, res, body) {
  	var getMovieParse = JSON.parse(body);
      console.log("\n----------------------------------------------\n");
      console.log("Title: " + getMovieParse.Title);
      console.log("Release Year: " + getMovieParse.Year);
      console.log("IMDB Rating: " + getMovieParse.imdbRating);
      console.log("Rotten Tomatoes Rating: " + getMovieParse.Ratings[1].Value); 
      console.log("Country: " + getMovieParse.Country);
      console.log("Language: " + getMovieParse.Language);
      console.log("Plot: " + getMovieParse.Plot);
      console.log("Actors: " + getMovieParse.Actors);
      console.log("\n----------------------------------------------\n");
  });
};

// do what it says:

function random() {

   
 fs.readFile('random.txt', function(error, data){

    if (error) {
        console.log("Error");
      }

  
    var dataArr = data.split(",");
    
    if (dataArr[0] === "spotify-this-song") {
        
      var song = dataArr[1].trim().slice(1, -1);
      spotifyThisSong(song);
    } 
   
    });
  
};

// logging data:

function display(dataLog) {

	console.log(dataLog);

	fs.appendFile('log.txt', dataLog + '\n', function(error) {
		
		if (error) console.log("Error");	
	});
}

caseBreak();