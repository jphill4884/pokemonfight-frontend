
const PokemonCard = (props) => {
  <div className="card">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur"/>
    <ul>
      <li>Hit Points: {props.base[0]}</li>
      <li>Attack Power: {props.base[1]}</li>
      <li>Defense Power: {props.base[2]}</li>
      <li>Speed: {props.base[5]}</li>
    </ul>

  </div>
}

export default PokemonCard;