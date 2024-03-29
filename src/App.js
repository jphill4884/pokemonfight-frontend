import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import PokemonList from './components/PokemonList';
import PokemonCard from './components/PokemonCard';
import Player from './components/Player';
import Battle from './components/battleComponent/battle';
import RankingTable from './components/rankings/rankingTable';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="gameBoard">
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/pokemon/" element={<PokemonList />} />
        <Route path="/:pokeId" element={<PokemonCard />} />
      
        {/* <Route path="/list" /> */}
        
        <Route path="/battle/:homeId/:awayId" element={<Battle />}/>

        {/* <Route path="/winner/:pokeId" /> */}
        <Route path="/ranking/w&l/:winner/:loser" element={<RankingTable/>}/>      

        <Route path="/ranking" element={<RankingTable/>}/>
  

      </Routes>
    </div>
  );
}

export default App;
