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

// TODO: Score 0 means you can't play again.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageOriginal = document.querySelector('.message').textContent;
const numberOriginal = document.querySelector('.number').textContent;
const scoreOriginal = document.querySelector('.score').textContent;
const styleBodyOriginal = document.querySelector('body').style.backgroundColor;
const styleNumberOriginal = document.querySelector('.number').style.width;

const gameOver = function () {
  document.querySelector('.message').textContent = '🤯 You lost the game!';
  document.querySelector('.score').textContent = 0;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // No imput
    document.querySelector('.message').textContent = '🙊 No number!';
  } else if (guess === secretNumber) {
    // Player wings
    document.querySelector('.message').textContent = '🎉 Corect Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess >= secretNumber) {
    // Guess too high
    if (score > 1) {
      document.querySelector('.message').textContent = '😮 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gameOver();
    }
  } else if (guess <= secretNumber) {
    // Guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent = '🥱 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      gameOver();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = messageOriginal;
  document.querySelector('.number').textContent = numberOriginal;
  document.querySelector('.score').textContent = scoreOriginal;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = styleBodyOriginal;
  document.querySelector('.number').style.width = styleNumberOriginal;
});
