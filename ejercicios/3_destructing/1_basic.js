'use strict';

/*
 * 1. Try to refactor this method to es6 using 3_destructing
 */

const user = {
  name: 'John',
  age: undefined,
};

/*
* START REFACTOR HERE
**/

const name = user.name || '';
const age = user.age || 18;

console.log(`Mr ${name} is ${age} years old.`);


