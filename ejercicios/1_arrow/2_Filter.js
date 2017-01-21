'use strict'

/*
* 2. Try to refactor this method to es6 using arrow
**/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const es5OddNumbers = numbers.filter(function(number) {
  return number % 2;
});
console.log(es5OddNumbers);