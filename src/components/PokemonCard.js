import { Link } from "react-router-dom";
import "./pokemonList.css";
import usePokemonsList from '../services/usePokemonsList';
import { useParams } from "react-router-dom";

const PokemonCard = ({pokemon}) => {
  
/* console.log(pokemon) */


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
        <ul>
          <li>Hit Points: {pokemon.base[0]}</li>
          <li>Attack Power: {pokemon.base[1]}</li>
          <li>Defense Power: {pokemon.base[2]}</li>
          <li>Speed: {pokemon.base[5]}</li>
        </ul>
      </div>
    </Link>
  );
};


export default PokemonCard;
