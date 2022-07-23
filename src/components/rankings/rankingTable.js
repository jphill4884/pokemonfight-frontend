import Table from "react-bootstrap/Table";
import { Button } from 'react-bootstrap';

import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./rankingTable.css";
import useRankingList from "../../services/useRankingList";

const RankingTable = () => {    
    
  const navigate=useNavigate();
  const ranking = useRankingList(); //We could pass a PokeName if we want to

  
   if (!ranking) return; 
/* 
  console.log(ranking);
  console.log(ranking[0].rank) */
  /* .sort( (a, b) => a.rank < b.rank?1:a.rank < b.rank?-1:0) */
  const sortedRanking= ranking.sort( (a, b) => a.rank < b.rank? -1: a.rank < b.rank ?1:0) 
  return (
    <>
    <h1>🏆LEADER BOARD🏆</h1>
    <Table striped bordered hover>
        
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Type</th>
          <th>Wins</th>
          <th>Loses</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {sortedRanking.map((item, index) => (
          <tr key={index}>
            <td>{item.rank}</td>
            <td>{item.poke_name}</td>
            <td>{item.type}</td>
            <td>{item.wins}</td>
            <td>{item.loses}</td>
            <td>{item.points}</td>
          </tr>
        ))}
        
      </tbody>
    </Table>

    {<div className="home m-5" ><Button className="btn btn-secondary btn-lg btn-font-size-lg p-3" onClick={()=>navigate("/") }>HOME </Button></div>}
    </>
  );
};

export default RankingTable;
