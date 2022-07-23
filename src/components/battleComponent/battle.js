import './battle.css';
import { useParams } from "react-router-dom";
import React, { useState } from "react";

import usePokemonsList from '../../services/usePokemonsList';
import BattleLogic from './battleLogic';



const Battle = () => {

const { homeId, awayId } = useParams();

const pokemonHome=usePokemonsList(homeId);
const pokemonAway=usePokemonsList(awayId);    
/* console.log( pokemonHome);
console.log( pokemonAway); */


if(!pokemonHome||!pokemonAway) return;

    return ( 
      <div className="battle">
        <span className="headline">💥 BATTLE 💥 </span>
        <div className='coins'>{<BattleLogic pokeHome={pokemonHome.name.english} pokeAway={pokemonAway.name.english}/>}</div>     
      </div>
    )
};

export default Battle;