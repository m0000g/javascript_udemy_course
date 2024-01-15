/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4
*/

"include strict";

// 1.- Understand the problem.
// The termometer should display a string with the given temperatures.
// "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// - Is this a whole string concatenated? Yeas, seems like it!

// 2.- Divide and conquer
// - Create both data arrays.
// - Create the function that will be loging the defined string to the console.

const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecastSting = "";
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    forecastSting += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  return console.log(forecastSting);
};

printForecast(arr);
printForecast(arr2);
