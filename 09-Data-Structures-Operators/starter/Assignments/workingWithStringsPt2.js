// Working with Strings - Part 2

const airline = 'Tap Air Portugal';

// Changing the case of a string

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in a name
const passenger = 'jOnAS'; // Jonas

const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Example of function to fix name capitalization

const fixNameCapitalization = function (name) {
  const nameLower = name.toLowerCase();
  return nameLower[0].toUpperCase() + nameLower.slice(1);
};
console.log(fixNameCapitalization('aNdRe'));

// Comparing emails

const email = 'hello@jonas.io';
const loginEmail = '   Hello@jonas.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// Deleting the white spaces
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// A simpler solution:
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);

// Replacing parts of strings

const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Other solution using regular expression

console.log(announcement.replace(/door/g, 'gate'));

// Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family.');
}

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
