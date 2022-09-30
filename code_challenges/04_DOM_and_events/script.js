'use strict';

/* 
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK  
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageOriginal = document.querySelector('.message').textContent;
const numberOriginal = document.querySelector('.number').textContent;
const styleBodyOriginal = document.querySelector('body').style.backgroundColor;
const styleNumberOriginal = document.querySelector('.number').style.width;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // No imput
    // document.querySelector('.message').textContent = '🙊 No number!';
    displayMessage('🙊 No number!');
  } else if (guess === secretNumber) {
    // Player wings
    // document.querySelector('.message').textContent = '🎉 Corect Number!';
    displayMessage('🎉 Corect Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    // Guess is wrong
    if (score > 1) {
      //document.querySelector('.message').textContent =
      guess > secretNumber ? '😮 Too high' : '🥱 Too low';
      score--;
      displayMessage(guess > secretNumber ? '😮 Too high' : '🥱 Too low');
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '🤯 You lost the game!';
      displayMessage('🤯 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = messageOriginal;
  document.querySelector('.number').textContent = numberOriginal;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = styleBodyOriginal;
  document.querySelector('.number').style.width = styleNumberOriginal;
});
