const country = "Costa Rica";
const continent = "Central America";
let population = 5094114;
const isIland = false;
const language = "Spanish";
const idioma = "English";
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
let populationMillion = population / 1000000;

let description = country + " is in " + continent + ", and " + Math.round(populationMillion) + " million people speak " + language;
console.log(description);
