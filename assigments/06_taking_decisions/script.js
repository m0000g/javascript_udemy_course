/* 
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)

2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original

*/

const country = "Costa Rica";
const continent = "Central America";
// let population = 5094114; Costa Rica
let population = 13000000;
const isIland = false;
const language = "Spanish";
const finland = 6000000;
const averageCountryPopulation = 33000000;

console.log(country);
console.log(continent);
console.log(population);
console.log(language);

console.log(typeof isIland, typeof population, typeof country, typeof language);
console.log(population / 2); // Half of the population.
population++;
console.log(population); // Population increase by 1
console.log(population > finland); // Does Costa Rica has more people than Finland?
console.log(population < averageCountryPopulation); // Does Costa Rica has less people than the average country?
let populationAvarage = averageCountryPopulation / 1000000;
let populationMillion = population / 1000000;
let populationBellow;

let description = `${country} is in ${continent}, and ${Math.round(populationMillion)} million people speak ${language}`;
console.log(description);
if (population > averageCountryPopulation) {
    console.log(`${country} population is above average`);
}
else {
    populationBellow = Math.abs(Math.round(populationMillion - populationAvarage));
    console.log(`${country} population is ${populationBellow} million bellow the average ${populationAvarage} million people.`);
}
