//Truthy and Falsy Values

//5 falsy values: 0, '', undefined, null, Nan -> all of these five values will be converted to false
//when we attempt to convert them to a boolean. They're not exactly false initially, but they will
//become converted to a boolean.

//Examples:

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 0;

if (money) {
  console.log('Dont spend it all');
} else {
  console.log('You should get a job!');
}

let height;
if (heig) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
