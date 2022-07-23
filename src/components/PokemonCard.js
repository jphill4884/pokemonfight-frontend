import { Link } from "react-router-dom";
import "./pokemonList.css";
import usePokemonsList from '../services/usePokemonsList';
import { useParams } from "react-router-dom";

const PokemonCard = ({pokemon}) => {
  
  console.log(pokemon)


  let opponent = Math.floor(Math.random() * 700) + 1;
  if (opponent === pokemon.id) {
    opponent+=1;
  };
 /*  console.log(opponent); */

  return (

  <Link to={`/battle/${pokemon.id}/${opponent}`}>
      <div className="pokeCard">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="bulbasaur"
        />
        <h2>{pokemon.name.english}</h2>
        <ul>
          <li>Hit Points: {pokemon.base.HP}</li>
          <li>Attack Power: {pokemon.base.Attack}</li>
          <li>Defense Power: {pokemon.base.Defense}</li>
          <li>Speed: {pokemon.base.Speed}</li>
        </ul>
      </div>
    </Link>
  );
};


export default PokemonCard;
