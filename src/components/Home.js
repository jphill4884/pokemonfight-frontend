import './Home.css';
import { useParams } from "react-router-dom";
import React, { useState } from "react";

import usePokemonsList from '../services/usePokemonsList';



const Home = () => {

const { pokeId } = useParams();

const pokemonsList=usePokemonsList(pokeId)  
console.log(pokemonsList);




    return (      
      <div className="mainpage ">
        <span className="headline">POKEBATTLE!</span>
        <button className="startbutton">FIGHT!</button>
        <div className="battlebanner">
          <img className="player" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png" alt="shekachu"/>
          <div className="subheader">vs</div>
          <img className="player" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/3.png" alt="venusaur"/>
        </div>
      </div>   
    )
};

export default Home;