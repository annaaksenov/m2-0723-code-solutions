export default function PokemonList(props) {
  let pokedex = props.pokedex;
  let list = pokedex.map((poke) => <li key={poke}>{poke.name}</li>);

  return <ul>{list}</ul>;
}
