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
  scored: [
    'Lewandowski',
    'Gnarby',
    'Lewandowski',
    'Hummels',
    'Akanji',
    'Lewandowski',
  ],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const odds = Object.values(game.odds);

let accumulator = 0;
for (const value of odds) accumulator += value;

const average = (accumulator / odds.length).toFixed(2);
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//      Odd of victory Bayern Munich: 1.33
//      Odd of draw: 3.25
//      Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw")

console.log(game);

const odds2 = Object.entries(game.odds);

// for (const [team, odd] of odds2) {
//   console.log(
//     `Odd of ${
//       team === 'x'
//         ? 'draw'
//         : team === 'team1'
//         ? `victory ${game.team1}`
//         : `victory ${game.team2}`
//     }: ${odd}`
//   );
// }

for (const [team, odd] of odds2) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.
// In this game, it will look like this:
/*
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

const gameV2 = { ...game, scorers };
console.log(gameV2);
console.log(game);