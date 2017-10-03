"use strict";

var _loop = function _loop(i) {
  setTimeout(function () {
    console.log(i);
  }, 500);
};

//Exercise:
//currently, this loop logs the integer "6" 5 times. Why is it doing that? 
//We can use the wicked cool "let" keyword to resolve this to the expected output of
// 1
// 2
// 3
// 4
// 5

//Do it!

for (var i = 1; i <= 5; i++) {
  _loop(i);
}

//lastly, declare a const and try to change it. Checkout the error message.