import { Link } from 'react-router-dom';
import './pokemonList.css';

const PokemonCard = ({ props }) => {
  console.log(props);

  return (
    <Link to={`/pokemon/${props.id}`}>
  <div className="pokeCard">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur"/>
    <ul>
      <li>Hit Points: {props.base[0]}</li>
      <li>Attack Power: {props.base[1]}</li>
      <li>Defense Power: {props.base[2]}</li>
      <li>Speed: {props.base[5]}</li>
    </ul>
  </div>
  </Link>
  )
}

export default PokemonCard;