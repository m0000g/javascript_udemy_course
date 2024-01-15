'use strict';

/* LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3'
 */

const percentageOfWorld3 = (population, country) => `${country}'s population has the ${(population / 7900) * 100}% of the World population.`;
console.log(percentageOfWorld3(1441, 'China'));

