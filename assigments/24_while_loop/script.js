/* 
LECTURE: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
 
*/

'use strict';

const worldpopulation = 7713468205;
const populations = [5094114, 28435943, 4314768, 50882884]
const percentageOfWorld1 = function (pupulation) { return (pupulation / worldpopulation) * 100 };
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
const percentages2 = [];
let i = 0;

while (i < populations.length) {
    // percentages2[i] = percentageOfWorld1(populations[i]);
    percentages2.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(percentages);
console.log(percentages2);