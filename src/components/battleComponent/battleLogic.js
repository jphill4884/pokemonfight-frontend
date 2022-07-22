import "./battle.css";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import FlipCoin from "./flipCoin";
import "./battleLogic.css";

import usePokemonsList from "../../services/usePokemonsList";

const BattleLogic = ({ pokeHome, pokeAway }) => {
  /* console.log(pokeAway); */
  const [winner, setWinner] = useState();

  const displayWinner = (winnerRound) => {
   /*  console.log(winnerRound); */
    let win;
    if(winnerRound){
    win = win+winnerRound}
    if(win<0)
    setWinner(pokeHome);
    else
    setWinner(pokeAway)
    
  };
  console.log(winner);



  return (
    <div className="container">
      <div className="flipCoins">
        {<FlipCoin time={1} winner={displayWinner} pokeH={pokeHome} pokeA={pokeAway}/>}
        {<FlipCoin time={2} winner={displayWinner} pokeH={pokeHome} pokeA={pokeAway}/>}
        {<FlipCoin time={3} winner={displayWinner} pokeH={pokeHome} pokeA={pokeAway}/>}
      </div>
      {winner && <div className="winner"><h1 >🏆 The winner is:🏆  </h1>
      <h2>{winner}</h2></div>}
      {winner && <div className="button"><button >Store result & View Ranking </button></div>}

    </div>
  );
};

export default BattleLogic;
