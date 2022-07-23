import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import PokemonList from './components/PokemonList';
import Player from './components/Player';


function App() {
  return (
    <div className="gameBoard">
      <Routes>
        <Route path="/pokemon" element={<Home />} />
        <Route path="/pokemon/list" element={<PokemonList />}/>
        <Route path="/pokemon/:pokeId" element={<Player />} />
        <Route path="/battle/:homeId/:awayId" />
        <Route path="/winner/:pokeId" />
        <Route path="/leaderboard" />
      </Routes>
    </div>
  );
}

export default App;
