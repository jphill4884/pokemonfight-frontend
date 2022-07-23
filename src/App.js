import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import PokemonList from './components/PokemonList';
import Player from './components/Player';
import Battle from './components/battleComponent/battle';
import RankingTable from './components/rankings/rankingTable';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="gameBoard">
      <Routes>
        <Route path="/pokemon" element={<Home />} />
        <Route path="/pokemon/list" element={<PokemonList />}/>
        <Route path="/pokemon/:pokeId" element={<Player />} />
        <Route path="/winner/:pokeId" />
        <Route path="/:pokeId" />
        <Route path="/battle/:homeId/:awayId" element={<Battle />}/>
        <Route path="/ranking" element={<RankingTable/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
