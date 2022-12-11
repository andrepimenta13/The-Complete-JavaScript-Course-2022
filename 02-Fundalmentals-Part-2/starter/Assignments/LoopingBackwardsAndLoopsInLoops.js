//Looping Backwards and Loops in Loops
/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0 (Backwards - reverse order)

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

console.log('--- OTHER SOLUTION ---');

jonas.reverse();

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);
}

//Loop inside another loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise - ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♂️`);
  }
}
*/

//Assignment

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

//1st solution

// for (let index = 0; index < listOfNeighbours.length; index++) {
//   for (let neighbour of listOfNeighbours[index]) {
//     console.log(`Neighbour: ${neighbour}`);
//   }
// }

//2nd solution

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}
