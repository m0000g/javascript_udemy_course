/* LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is
*/

'use strict';


const worldpopulation = 7713468205;
const populations = [5094114, 28435943, 4314768, 50882884]
const percentageOfWorld1 = function (pupulation) { return (pupulation / worldpopulation) * 100 };
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    //percentages2[i] = percentageOfWorld1(populations[i]);
    // Better this way
    percentages2.push(percentageOfWorld1(populations[i]));

}
console.log(percentages);
console.log(percentages2);