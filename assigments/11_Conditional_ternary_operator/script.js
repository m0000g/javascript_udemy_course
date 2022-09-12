'use strick';

/* . If your country's population is greater than 33 million, use the ternary operator 
to log a string like this to the console: 'Portugal's population is above average'. 
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original
 */

const country = "Costa Rica";
const continent = "Central America";
let population = 5094114; // A bit more of 5 millions
//let population = 130000000; // Test above 33000000
const isIland = false;
const language = "Spanish";

const isAverage = population >= 33000000 ? `${country}'s population is above average.` : `${country}'s population is bellow average.`

console.log(isAverage);