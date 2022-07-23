import { Link } from "react-router-dom";
import "./pokemonList.css";
import usePokemonsList from '../services/usePokemonsList';
import { useParams } from "react-router-dom";

const PokemonCard = () => {
  

  const { pokeId  } = useParams();

  const selectedPoke=usePokemonsList(pokeId);
  if(!selectedPoke) return;

  let opponent = Math.floor(Math.random() * 700) + 1;
  if (opponent === props.id) {
    opponent++;
  };
  console.log(opponent);

  return (

<Link to={`/pokemon/battle/${props.id}/${opponent}`}>
      <div className="pokeCard">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="bulbasaur"
        />
        <ul>
          <li>Hit Points: {selectedPoke.base[0]}</li>
          <li>Attack Power: {selectedPoke.base[1]}</li>
          <li>Defense Power: {selectedPoke.base[2]}</li>
          <li>Speed: {selectedPoke.base[5]}</li>
        </ul>
      </div>
    </Link>
  );
};


export default PokemonCard;
