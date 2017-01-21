'use strict'

/*
 * 1. Try to refactor this method to es6 using arrow
**/

const numbers = [1,2,3,4,5];
const timesTwo = numbers.map(function (number) {
  return number * 2;
});
console.log(timesTwo); // [2, 4, 6, 8, 10]