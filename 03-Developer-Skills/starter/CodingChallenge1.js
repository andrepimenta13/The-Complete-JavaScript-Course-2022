//My solution

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const strings = [];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    strings[i] = `${arr[i]}ºC in ${i + 1} days...`;
  }
  return console.log(strings.join(''));
};

printForecast(data1);
printForecast(data2);

///////////////

// 1) Understanding the problem
// - Array transformed to string separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// -Transform array into string
// -Transform each element to string with Celcius ºC
// -String needs to contain day (index + 1)
// -Add ... between elements and start and end of string

//Solution:
