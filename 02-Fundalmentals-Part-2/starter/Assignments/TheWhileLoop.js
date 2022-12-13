//The While Loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}! 🏋️‍♀️`);
// }

// let rep = 1;

// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}! 🏋️‍♀️`);
//   rep++;
// }

//Exercise

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log('Loop is about to end...');
//   }
// }

//Assignment

const populations2 = [10, 1441, 332, 83, 5000, 105, 1002];
const percentages2 = [];

function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}

for (let i = 0; i < populations2.length; i++) {
  percentages2.push(percentageOfWorld1(populations2[i]));
}

console.log(percentages2);

//Assignment with While implementation
const percentages3 = [];
let i = 0;

while (i < populations2.length) {
  percentages3.push(percentageOfWorld1(populations2[i]));
  i++;
}

console.log(percentages3);
