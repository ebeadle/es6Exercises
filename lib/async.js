'use strict';

//This might help some understand asynchronous functions. While "asyncSim" is
//not asynchronous, the callback one passes into it is. 

//this is like the jquery $.get() function - remember when we passed a function
//into it, and that function got executed when the our express server responded with
//our chair data? This is a model of what happened and in this case, it takes 2 seconds
//to pass the data back. Using arrow notation, pass a function into "asyncSim"
//to log "this is all the data, do whatever you want to it"

function asyncSim(callback) {
  setTimeout(function () {
    callback('this is all the data, do whatever you want to it');
  }, 2000);
};

//code goes into the function call below
asyncSim();

//Part 2: In the callback execution, pass another string as an arg and log that one as well.


//Part 3: After you're done with the above stuff, let's continue the simulation by converting the data into an array of each letter
//in one of the strings  you passed into the callback and console logging each element in that array!