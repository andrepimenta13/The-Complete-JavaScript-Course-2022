// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = 23;

const calcAge = (birthYear) => 2037 - birthYear;

// console.log(xyaz);
// console.log(xyaz);

// console.log(calcAge(1991));

const reverse = function (a) {
  if (typeof a === 'string') {
    // return a new array of strings
    const arrayStrings = a.split('');

    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();

    // join all elements of the array into a string
    const joinArray = reverseArray.join('');

    // return the reversed string
    return joinArray;
  } else if (typeof a === 'number') {
    let result = Number(String(a).split('').reverse().join(''));
    return result;
  } else if (Array.isArray(a)) {
    return a.reverse();
  } else {
    return 'Error: Invalid argument';
  }
};

const a = { Name: 'André' };

console.log(typeof a);
console.log(reverse(a));

let b = 'abcdefghijkl';

switch (typeof b) {
  case 'string':
    // return a new array of strings
    const arrayStrings = b.split('');
    console.log(arrayStrings);

    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
    console.log(reverseArray);

    // join all elements of the array into a string
    const joinArray = reverseArray.join('');

    console.log(joinArray);
    break;

  case 'number':
    let result = Number(String(b).split('').reverse().join(''));
    console.log(result);
    break;

  case 'object':
    console.log(b.reverse());
    break;

  default:
    break;
}
*/

//PROBLEM:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// -What  is the temp amplitude? Answer: difference between highest and lowest temperatures.
// -How to compute max and min temperatures?
// -What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// -How to ignore sensor errors?
// -Find Max value in temperature array;
// -Find Min value in temperature array;
// -Subtract min from max and then return it;

const calcTempAmplitude = (temps) => {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log('Old function:', amplitude);

// PROBLEM 2:
// Function should now receive two arrays of temperatures

// 1) Understanding the problem
// -With 2 arrays, should we implement funcitonality twice? No, just merge two arrays.

// 2) Breaking up into sub-problems
// -Merge two arrays?

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = (t1, t2) => {
  //   let temps = [...temps1, ...temps2]; //solution with spread operator
  const temps = t1.concat(t2); //solution with concat method

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures1, temperatures2);
console.log('New function:', amplitudeNew);

//PROBLEM 3:
//We are getting a error message when he first position of the array is an 'error' value.

// 1) Understanding the problem

// 2) Breaking up into sub-problems
