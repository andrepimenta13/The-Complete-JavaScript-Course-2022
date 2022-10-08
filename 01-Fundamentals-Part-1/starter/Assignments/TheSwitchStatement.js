//The Switch Statement - Explanation

const day = 'sunday';

switch (day) {
  case 'monday': //day === 'monday'
    console.log('Plan course structure.');
    console.log('Go to coding meetup.');
    break;
  case 'tuesday': //day === 'tuesday'
    console.log('Prepare theory videos.');
    break;
  case 'wednesday': //day === 'wednesday'
  case 'thursday': //day === 'thursday'
    console.log('Write code examples.');
    break;
  case 'friday': //day === 'friday'
    console.log('Record videos.');
    break;
  case 'saturday': //day === 'saturday'
  case 'sunday': //day === 'sunday'
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure.');
  console.log('Go to coding meetup.');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos.');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples.');
} else if (day === 'friday') {
  console.log('Record videos.');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

//Assignment

const language = 'portuguese';

switch (language) {
  case 'chinese':
  case 'mandarin':
    {
      console.log('MOST number of native speakers!');
    }
    break;
  case 'spanish':
    {
      console.log('2nd place in number of native speaksers.');
    }
    break;
  case 'english':
    {
      console.log('3rd place in number of native speakers!');
    }
    break;
  case 'hindi':
    {
      console.log('Number 4!');
    }
    break;
  case 'arabic':
    {
      console.log('5th most spoken language!');
    }
    break;
  default:
    {
      console.log('Great language to :D');
    }
    break;
}
