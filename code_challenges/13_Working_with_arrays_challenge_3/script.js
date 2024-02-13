'use strict';

/*
Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
- Data 1: [5, 2, 4, 1, 15, 8, 3]
- Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

const dataSet1 = [5, 2, 4, 1, 15, 8, 3];
const dataSet2 = [16, 6, 10, 5, 6, 1, 4];

/* const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const onlyOver18YearsOld = humanAge.filter(age => age > 18);
  const averageAge =
    onlyOver18YearsOld.reduce((acc, cur) => acc + cur, 0) /
    onlyOver18YearsOld.length;
  return averageAge;
}; */

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const averageAge1 = calcAverageHumanAge(dataSet1);
const averageAge2 = calcAverageHumanAge(dataSet2);
console.log(averageAge1);
console.log(averageAge2);
