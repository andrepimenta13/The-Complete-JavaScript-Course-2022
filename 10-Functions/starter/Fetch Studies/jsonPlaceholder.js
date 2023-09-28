const url = 'https://jsonplaceholder.typicode.com/users';

const fetchFunc = () => {
  fetch(url)
    .then((response) => {
      // console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

async function getUsers() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

setTimeout(() => {
  console.log(`setTimeout`);
  getUsers();
  fetchFunc();
}, 5000);

// getUsers();
