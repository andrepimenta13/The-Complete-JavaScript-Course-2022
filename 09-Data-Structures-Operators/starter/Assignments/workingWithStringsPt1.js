////////////////////////////////////////////////////////////////////
// Working with Strings - Part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// Slice, indexOf and lastIndexOf string methods

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4)); //Air Portugal - is called a substring because it's just a part of the original string
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// Example - Write a function that receives an airplane seat and logs to the console whether it is a middle seat or not

// 1st solution
// const checkMiddleSeat = (seat) => {
//   // B and E are the middle seats
//   console.log(
//     seat.indexOf('B') != -1 || seat.indexOf('E') != -1
//       ? 'Seat is in the middle'
//       : 'Seat is not in the middle'
//   );
// };

// 2nd solution
const checkMiddleSeat = (seat) => {
  // B and E are the middle seats
  const last = seat.slice(-1);
  if (last === 'B' || last === 'E') console.log('You got the middle seat 💺');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
checkMiddleSeat('13D');

// Javascript behind the scenes, do this conversion above, whenever we call a method on a string
// and then when the operation is done, the object is converted back to a regular string primitive.

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

// and in fact, all string methods return primitives, even if called on a string object.

console.log(typeof new String('jonas').slice(1));
