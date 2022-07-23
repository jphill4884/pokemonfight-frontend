import React, { useState, useEffect } from "react";
import "./flipCoin.css";

const FlipCoin = ({ time, winner, pokeH, pokeA }) => {
 /*    console.log(pokeH); */
  const [winnerCoin, setWinnerCoin] = useState();
  const [displayWinner, setDisplayWinner] = useState();

  const coinToss = () => {
    if (Math.random() < 0.5) {
      setWinnerCoin("flipHead");
      /* console.log("heads"); */
      setDisplayWinner(pokeH);
      winner(1);
    } else {
      setWinnerCoin("flipTail");
      /* console.log("tails"); */
      winner(-1);
      setDisplayWinner(pokeA);
    }
  };

  if (winnerCoin) {
    /* console.log(winnerCoin); */
  }

  useEffect(() => {
    const timer = setTimeout(() => coinToss(), time * 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!winnerCoin) return;

 /*  console.log(displayWinner); */
  return (
    
    <div className="flipCoin">
      <div id="coin" className={winnerCoin} key={+new Date()}>
        <div className="side head">
          <h2>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png"
              alt="shekachu"
            />
          </h2>
        </div>
        <div className="side tail">
          <h2>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/3.png"
              alt="shekachu2"
            />
          </h2>
        </div>
      </div>
      <h2 className="winnerName">{displayWinner}</h2>
    </div>
  );
  /* } */
};

export default FlipCoin;
