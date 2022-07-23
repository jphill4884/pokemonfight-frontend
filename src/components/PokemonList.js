import PokemonCard from './PokemonCard';
import Pokemons from '../Data.json';
import './pokemonList.css';

const PokemonList = () => {
  console.log(Pokemons);

  return(
    <div className="pokeList">
    {Pokemons &&
      Pokemons.map((onePokemon, index) => (
      <PokemonCard key={index} props={onePokemon} />
    ))}
    </div>
  )
}

export default PokemonList;