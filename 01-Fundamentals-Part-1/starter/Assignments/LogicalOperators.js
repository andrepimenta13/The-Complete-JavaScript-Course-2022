//Logical Operators
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = false; //C
console.log((hasDriversLicense && hasGoodVision) || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

//Assignment

const country = 'Portugal';
const language = 'portuguese';
const isIsland = false;
const population = 10;

// if (isEnglish && isIsland && populationUnder50) {
//   console.log('You should live in Portugal :)');
// } else {
//   console.log('Portugal does not meet your criteria :(');
// }

if (language === 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
