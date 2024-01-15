/* LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation */

'use strict';

const myCountry = {
  contry: `Costa Rica`,
  capital: `San José`,
  language: `Spanish`,
  population: 5,
  neighbours: [`Nicaragua`, `Panamá`],
};

console.log(
  `${myCountry.contry} has ${myCountry.population} millions ${myCountry.language}-speakng people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
console.log(myCountry);
myCountry[`population`] -= 2;
console.log(myCountry);

// Why Bracket is so special?
let p = `p`;
console.log(myCountry[p + `opulation`]);
