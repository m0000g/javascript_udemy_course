/* 
LECTURE: Looping Backwards and Loops in Loops
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire 
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
worry if it's too difficult for you! But you can still try to figure this out anyway 
*/

'use strict';

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
    'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let x = 0; x < listOfNeighbours[i].length; x++) {
        console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
    }
}

