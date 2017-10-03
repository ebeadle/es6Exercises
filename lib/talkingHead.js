"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Song = function () {
  function Song(artist, title) {
    _classCallCheck(this, Song);

    this.artist = artist;
    this.title = title;
  }

  _createClass(Song, [{
    key: "getTitle",
    value: function getTitle() {
      return "title is: " + this.title + " by " + this.artist;
    }
  }]);

  return Song;
}();

var fire = new Song("talking heads", "fire");

var stevie = new Song("Stevie Wonder", "Living for the City");

console.log(stevie.getTitle());

exports.Song = Song;

//Exercise:
//Add a method to the Song class that returns the string "title is {title} by {artist}.
//Next, create an instance of it with your favorite Talking Heads song and
//use the method you just created to log the title of the song. Then, 
//create another instance of it with your favorite Stevie Wonder song and
//log the title of the song. Export the class using the es6 export method.