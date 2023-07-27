async function logNames() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const names = await response.json();
  console.log(names);
}
logNames();

async function getPoke() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
    method: 'GET',
  });
  const poke = await response.json();
  console.log(poke);
}
getPoke();
