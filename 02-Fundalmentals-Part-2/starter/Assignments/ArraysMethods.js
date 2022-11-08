//Assignment

const neighbours = ['Portugal', 'Sweden', 'Norway', 'Finland', 'Italy'];

neighbours.push('Utopia'); //add element to the end of the array
console.log(neighbours);

neighbours.pop(); //remove element from the end of the array
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);
