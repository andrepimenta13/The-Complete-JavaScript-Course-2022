const URL = 'https://jsonplaceholder.typicode.com/users';
const urlPokemons = 'https://pokeapi.co/api/v2/pokemon/';
const urlPokemon = `https://pokeapi.co/api/v2/pokemon/`;

// Using fetch

// fetch(URL)
//   .then((response) => {
//     if (!response.ok) {
//       console.log(response);
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Using async/await

// async function getUsers() {
//   try {
//     const response = await fetch(URL);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUsers();

// Using Post Method with async/await

async function createUser(userData) {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log('Error posting user:', err);
  }
}

const userData = {
  name: 'Zeca Afonso',
  username: 'Zequinha',
  email: 'zequinhaAfonsine@gmail.com',
};

createUser(userData);

// async function getPokemons() {
//   try {
//     const response = await fetch(urlPokemons);
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// // setTimeout(getPokemons, 3000);
// getPokemons();

// async function getPokemon(id) {
//   try {
//     const response = await fetch(`${urlPokemon}/${id}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getPokemon('clefairy');
