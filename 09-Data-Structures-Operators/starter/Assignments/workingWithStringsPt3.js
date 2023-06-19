// Working with Strings - Part 3

// Split - allows us to split a string into multiple parts based on a divider string and create a new array with that parts separated

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName);

// Join - joins an array of strings into a single string

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.toLowerCase().split(' ');
  const namesUpper = [];

  for (const n of names) {
    // 1st solution
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    // 2nd solution
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('Jessica ann smith davis');
capitalizeName('jonas schmedtmann');
capitalizeName('ANDré pImEnTa');

// Padding - add a number of characters to the string until the string has a certain desired length

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// Example of real world

const maskCreditCard = function (number) {
  const str = number + ''; // converting number to string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));
console.log(maskCreditCard(283172389123718));

// Repeat - repeat a string multiple times

const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in the line ${'🛩️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
