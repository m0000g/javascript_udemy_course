'include strict';

/* PART 2 - FUNDAMENTALS
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
*/

// Formula: BMI = mass / height ** 2
// full name, mass, and height

const bmiCalculate = function (mass, height) {
    return mass / height ** 2;
}

const mark = [`Mark Miller`, 78, 1.69, bmiCalculate(78, 1.69)];
const john = [`John Smith`, 98, 1.95, bmiCalculate(98, 1.95)];

console.log(mark);
console.log(john);

if (mark[mark.length - 1] > john[john.length - 1]) {
    console.log(`Mark's BMI (${mark[mark.length - 1]}) is higher than Jhon's (${john[john.length - 1]})!)`);
}
else if (john[john.length - 1] > mark[mark.length - 1]) {
    console.log(`Jhon's BMI (${john[john.length - 1]}) is higher than Marks's (${mark[mark.length - 1]})!)`);
}
else {
    console.log(`Mark and Jhon have the same BMI of ${mark[mark.length - 1]}`)
}