import { useState, useEffect } from "react";


const usePokemonImage = (originalName) => {

  /* console.log(originalName); */


  const [pokemon, setPokemon] = useState();

  const pokeName = originalName.toLowerCase();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setPokemon(data);

          /*   console.log(data); */
        })
        .catch((e) => console.log(e.message));
  }, [pokeName]);
  if (!pokemon) return null;
  return pokemon.sprites.front_default;
};

export default usePokemonImage;

