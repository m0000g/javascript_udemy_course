'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.- Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal}: ${player}`);
}

// 2.- Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember) - Do not destruct the object into variables.
// Calculate the average of the elements in the object.

let average = 0;
for (const value of Object.values(game.odds)) {
  average += value;
}
console.log(average / Object.keys(game.odds).length);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Get the team names directly from the game object, don't hardcode them  (except for "draw").
// Hint: Note how the odds and the game objects have the same property names

for (const [key, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${game[key] ? 'victory ' : 'draw'}${game[key] || ''}: ${value}`
  );
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

let scorers = {};
for (const [key, player] of Object.entries(game.scored)) {
  scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
}
console.log(scorers);
