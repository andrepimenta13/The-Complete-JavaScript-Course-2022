//Arrays Methods
/*
const friends = ['Michael', 'Steven', 'Peter'];

//push - Add elements to the end of the array and return the length
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//unshift - Add elements to the beginning of the array and return the length
friends.unshift('John');
console.log(friends);

//pop - Remove last element from the array and return the removed element
friends.pop();
console.log(friends);

//shift - Remove first element from the array and return the removed element
friends.shift();
console.log(friends);

//indexOf - Return the index of the certain element in the array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); //Doesn't exist, so return -1

//includes - simply return true if the element is present in the array and false if it's not
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends.includes('23')); //returns false because it's testing with strict equality which means that it does not do type coercion.

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

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
