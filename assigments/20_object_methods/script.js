/* LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property */

'use strict';

const myCountry = {
    contry: `Costa Rica`,
    capital: `San José`,
    language: `Spanish`,
    population: 5,
    neighbours: [`Nicaragua`, `Panamá`],
    describe: function () {
        console.log(`${this.contry} has ${this.population} millions ${this.language}-speakng people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsLand: function () {
        this.isIsland = this.neighbours.length < 1 ? true : false;
    }
}


// Show description
myCountry.describe();

// Check if Island
myCountry.checkIsLand();
console.log(`isIsland: ${myCountry.isIsland}`);
