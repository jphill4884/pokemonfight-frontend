import "./battle.css";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import FlipCoin from "./flipCoin";
import "./battleLogic.css";
import { useNavigate } from "react-router-dom";
import serverUrl from "../../serverUrl";

/* import useRankingList from "../../services/useRankingList"; */

const BattleLogic = ({ pokeHome, pokeAway }) => {
  const navigate = useNavigate();

  const [winner, setWinner] = useState();
  const [loser, setLoser] = useState();
 /*  const [round, setRound] = useState(0); */
 let round=0;
 let win=0;
  const displayWinner = (winnerRound) => {
   /*  console.log(winnerRound); */
   
   
    if (winnerRound) {
      win = win + winnerRound;
      round=round+1;
     
  /*     setRound(finalRounds); */
    }
     console.log(round);
    console.log(win);
    if (round === 3) {
      if (win > 0) {setWinner(pokeHome);
        setLoser(pokeAway);
      }
      else {setWinner(pokeAway);
        setLoser(pokeHome);}
    }
  };
  console.log(winner);
  /* const rankingItem = useRankingList("win",winner) */

  const updateRanking = (winLose, pokeName) => {
    fetch(`${serverUrl}/ranking/${winLose}/${pokeName}`, {method: 'PUT'})
      .then((res) => res.json())
      .then((data) => {
       /*  console.log(data); */
      })
      .catch((e) => console.log(e.message));
  };

  const gotoTupdatedRanking = () => {
    if (winner === pokeHome) {
      updateRanking("win", pokeHome);
      updateRanking("lose", pokeAway);
    } else {
      updateRanking("lose", pokeHome);
      updateRanking("win", pokeAway);
    }
    const timer=()=>setTimeout(() =>navigate("/ranking/w&l/"+winner+"/"+loser) ,  2000);
    timer();
    clearTimeout(timer)
  };


  return (
    <div className="container">
      <div className="flipCoins">
        {
          <FlipCoin
            time={1}
            winner={displayWinner}
            pokeH={pokeHome}
            pokeA={pokeAway}
          />
        }
        {
          <FlipCoin
            time={2}
            winner={displayWinner}
            pokeH={pokeHome}
            pokeA={pokeAway}
          />
        }
        {
          <FlipCoin
            time={3}
            winner={displayWinner}
            pokeH={pokeHome}
            pokeA={pokeAway}
          />
        }
      </div>
      {winner && (
        <div className="winner">
          <h1>🏆 The winner is:🏆 </h1>
          <h2>{winner}</h2>
        </div>
      )}
      {winner && (
        <div className="button" onClick={() => gotoTupdatedRanking()}>
          <button>Store result & View Ranking </button>
        </div>
      )}
    </div>
  );
};

export default BattleLogic;
