/* LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your 
choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of 
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from 
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the 
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the 
index of the country in the 'neighbours' array, and then use that index to 
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
 */

'use strict';

const neighbours = [`Nicaragua`, `Panamá`];
console.log(`Orignal Array`, neighbours);
neighbours.push(`Utopia`);
console.log(`Push Utopia as a neighbour`, neighbours);
neighbours.pop();
console.log(`Pop Utopia as a neighbour`, neighbours);
console.log(`>  Neighbour with Germany?`)
if (!neighbours.includes(`Germany`)) {
    console.log(`Probably not a central European country 😂`);
}
console.log(`> Change one neighbour with Tahití`);
const indexCountry = neighbours.indexOf(`Nicaragua`);
neighbours[indexCountry] = `Tahití`;
console.log(neighbours);

if (neighbours.includes(`Tahití`)) {
    console.log(`This country is next to Tahití, we all know that is a magical place.`)
}
