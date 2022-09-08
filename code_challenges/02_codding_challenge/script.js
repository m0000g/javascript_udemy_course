/* 
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

*/

let markWeight = 78;
let johnWeight = 98;
let markHeight = 1.69;
let johnHeight = 1.95;

let bmiMark = markWeight / markHeight ** 2;
let bmiJohn = johnWeight / johnHeight ** 2;
let markHigherBMI = (bmiMark > bmiJohn);

console.log(bmiMark, bmiJohn, markHigherBMI);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI is higher than John's!`)
}
else {
    console.log(`John's BMI is higher than Mark's!`);
}

markWeight = 95;
johnWeight = 85;
markHeight = 1.88;
johnHeight = 1.76;

bmiMark = markWeight / markHeight ** 2;
bmiJohn = johnWeight / johnHeight ** 2;
markHigherBMI = (bmiMark > bmiJohn);

console.log(bmiMark, bmiJohn, markHigherBMI);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
}
else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

