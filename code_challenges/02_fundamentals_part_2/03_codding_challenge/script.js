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

const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }


};

const john = {
    fullName: `John Smith`,
    mass: 98,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`Mark's BMI (${mark.bmi}) is higher than Jhon's (${john.bmi})!)`);
}
else if (john.bmi > mark.bmi) {
    console.log(`Jhon's BMI (${john.bmi}) is higher than Marks's (${mark.bmi})!)`);
}
else {
    console.log(`Mark and Jhon have the same BMI of ${mark.bmi}`)
}