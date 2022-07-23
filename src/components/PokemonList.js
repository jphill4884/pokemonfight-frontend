import PokemonCard from './PokemonCard';
/* import Pokemons from '../Data.json'; */
import './pokemonList.css';
import usePokemonsList from '../services/usePokemonsList';


const PokemonList = () => {

  const pokemons=usePokemonsList();
 /*  console.log(pokemons); */

  if(!pokemons)return;


  return(
    <div className="pokeList">
    {pokemons &&
      pokemons.map((onePokemon, index) => (
      <PokemonCard key={index} pokemon={onePokemon} />
    ))}
    </div>
  )
}

export default PokemonList;