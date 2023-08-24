// Functions Accepting Callback Functions

const oneWord = (str) => str.replace(/ /g, '').toLowerCase();

// console.log(oneWord('JavaScript is the best!'));

const upperFirstWord = function (str) {
  // 1st solution
  // return str[0].toUpperCase() + str.slice(1);

  //2nd solution
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// console.log(upperFirstWord('javascript is the best!'));

// High-Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // we can retrieve the name of the function
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
