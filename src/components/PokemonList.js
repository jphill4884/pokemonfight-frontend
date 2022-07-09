import PokemonCard from './components/PokemonCard';
import PokemonData from '../Data.json';

const PokemonList = () => {
    PokemonData.map((pokemon) => (
      <PokemonCard key={pokemon.id} props={pokemon} />
    ))
}

export default PokemonList;