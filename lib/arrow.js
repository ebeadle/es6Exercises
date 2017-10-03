"use strict";

//That might have been a little strange, but you've actually done it a
//bajillion times. This might be a little more familiar to you:

function barf(callback) {
  var catData = {
    dweebyCat: "Mody"
  };
  callback(data);
}

barf(function (data) {
  console.log(data.dweebyCat);
});

//convert the callback function above to use arrow notation. 

//Last part - notice how data gets passed through a callback. Not so magical
//anymore right? Add a property to the object catData and log it in the
//arrow function you just made