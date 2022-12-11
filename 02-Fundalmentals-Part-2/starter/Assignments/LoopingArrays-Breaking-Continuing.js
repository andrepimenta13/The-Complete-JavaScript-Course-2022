/*
//Looping Arrays, Breaking and Continuing

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //Filling an array with types of elements of another array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

//Continue and break
//Continue is to exit the current interation of the loop and CONTINUE to the next one;
//On the other hand, Break is used to completely terminate the whole loop

console.log('--- ONLY STRINGS ---');

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}
*/

//Assignment
const populations2 = [10, 1441, 332, 83, 5000, 105];
const percentages2 = [];

function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}

for (let i = 0; i < populations2.length; i++) {
  percentages2.push(percentageOfWorld1(populations2[i]));
}

console.log(percentages2);
