"use strict";

//You might find yourself needing to use multiple async functions. 
//For example, perhaps you need to query your mongo database for 
//several documents before you can render a webpage. Here's some code
//that simulates 3 async function calls:

function queryFirstDoc(callback) {
  setTimeout(function () {
    var doc1 = { dumbProp: "dumbValue" };
    callback(doc1);
  }, 2000);
};

function querySecondDoc(callback) {
  setTimeout(function () {
    var doc2 = { dumbProp2: "dumbValue2" };
    callback(doc2);
  }, 2000);
};

function queryThirdDoc(callback, err) {
  setTimeout(function () {
    var doc3 = { dumbProp3: "dumbValue3" };
    if (doc3) {
      callback(doc3);
    } else {
      err("doc 3 isn't found");
    }
  }, 2000);
};

//Exercise 1: using these functions, generate a string that says 
// We finally have all our docs - {dumbProp1}, {dumbProp2}, {dumpProp3}

//Exercise 2:
//I created an error handling mechanism for queryThirdDoc(), which can be used like this:
// queryThirdDoc(function(doc){
//   console.log(doc)
// }, function(errMessage){
//  console.log(errMessage)
// });
//edit the function queryThirdDoc to make the error "catch" or get executed.

//Then, edit queryFirstDoc and querySecondDoc to use a similar mechanism. Be sure to test them out