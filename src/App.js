import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/pokemon" element={<Home />} />
        <Route path="/pokemon/:pokeId" element={<Home />} />
        <Route path="/list" />
        <Route path="/:pokeId" />
        <Route path="/battle/:homeId/:awayId" />
        <Route path="/winner/:pokeId" />
        <Route path="/leaderboard" />
      </Routes>
    </div>
  );
}

export default App;
