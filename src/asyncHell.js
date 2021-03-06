//You might find yourself needing to use multiple async functions. 
//For example, perhaps you need to query your mongo database for 
//several documents before you can render a webpage. Here's some code
//that simulates 3 async function calls:

function queryFirstDoc(callback) {
  setTimeout(() => {
    let doc1 = {dumbProp: "dumbValue"};
    callback(doc1);
  }, 2000);
};

function querySecondDoc(callback, err) {
  setTimeout(() => {
    let doc2 = {dumbProp2: "dumbValue2"};
    if (false){
      callback(doc2);
    } else {
      err("doc 2 isn't found");
    }
  }, 2000);
};

function queryThirdDoc(callback, err) {
  setTimeout(() => {
    let doc3 = {dumbProp3: "dumbValue3"};
    if (doc3){
      callback(doc3);
    } else {
      err("doc 3 isn't found");
    }
  }, 2000);
};


queryFirstDoc((data)=>{
  querySecondDoc((data2)=>{
    queryThirdDoc((data3)=>{  
      console.log("We finally have all our docs - " + data.dumbProp + ", " + data2.dumbProp2 + ", " + data3.dumbProp3);
    }, (errMessage)=>{
      console.log(errMessage);
    });
  }, (errMessage)=>{
    console.log(errMessage);
  });
});
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