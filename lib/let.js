"use strict";

//Exercise: Using the 'let' keyword, modify the es6Rulz function to log 'i messed it all up' on the
//'console log 1' and "we need this string l8r" in 'console log 2'

function es6Rulz() {

  var strawHat4you = "we need this string l8r";

  if (true) {
    var _strawHat4you = "i messed it all up";
    //console log 1
    console.log(_strawHat4you);
  }
  //console log 2
  console.log(strawHat4you);
}

es6Rulz();

//This is essentially why global scoping is bad - if you're not careful
//you can think a variable is one thing when something else in your code
//has changed it.