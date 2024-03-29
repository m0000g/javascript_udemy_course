'use strict';
/* 
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
* Remember which character defines a new line in the textarea
* The solution only needs to work for a variable made out of 2 words, like a_b
* Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working.
* This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!

*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// 1.- Receives list of variables and transform them from underscore_case to camelCase.
const convertCamelCase = function (array) {
  //console.log(array);
  for (const [i, str] of array.entries()) {
    const strArray = str.toLowerCase().trim().split('_');
    let newString = ' ';
    for (const word of strArray) {
      if (newString !== ' ') {
        newString = newString.concat(
          word.replace(word[0], word[0].toUpperCase())
        );
      } else {
        newString = word;
      }
    }
    console.log(`${newString.padEnd(20, ' ')} ${'✅'.repeat(i + 1)}`);
  }
};

const onClickButton = function () {
  const contenido = document.querySelector('textarea').value.split('\n');
  //console.log(`Original Array: ${contenido}`);
  convertCamelCase(contenido);
};

const button = document.querySelector('button');
const contenido = document.querySelector('textarea');
button.innerHTML = 'Transform';

button.addEventListener('click', onClickButton);
