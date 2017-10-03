"use strict";

//one of the best aspects of javascript is that functions are 
//"first class citizens" which basically means you can pass them
//into other functions, like you would a string, array, or object.
//Pass the function sunshine into the function rainbow to get it to
//log "sunshine called." (note: rainbow calls the arg, so you don't want 
// to evaluate it in the arg you passed in!)

function rainbow(callback) {
  callback();
}

function sunshine(rainbow) {
  console.log("sunshine called");
}