//My solution

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const strings = [];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    strings[i] = ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  let concatStrings = strings.join('');
  concatStrings = '...' + concatStrings;
  return console.log(concatStrings);
};

printForecast(data1);
printForecast(data2);

///////////////

// 1) Understanding the problem
// - Array transformed to string separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with Celcius ºC
// - String needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
//Solution:

const printForecast2 = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  str = '...' + str;
  console.log(str);
};

printForecast2(data1);
printForecast2(data2);
