import { useState, useEffect } from "react";
import serverUrl from "../serverUrl";

const usePokemonsList = (pokeId) => {
  const [pokemons, setPokemons] = useState();

  console.log(`${serverUrl}`);

  useEffect(() => {
    if (pokeId === undefined) {

        fetch(`${serverUrl}/pokemon`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPokemons(data);
        })
        .catch((e) => console.log(e.message));

    } else {
   
    fetch(`${serverUrl}/pokemon/${pokeId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemons(data);
      })
      .catch((e) => console.log(e.message));
    }

  }, [pokeId]);

  if (!pokemons) return null;
  return pokemons;
};

export default usePokemonsList;
