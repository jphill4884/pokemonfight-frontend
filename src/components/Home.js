

const Home = () => {
    return ( 
      <div>
        <div><h1>POKEBATTLE!</h1></div>
        <div className="battlebanner">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png" alt="shekachu"/>
          <h1>vs</h1>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/3.png" alt="venusaur"/>
        </div>
        <button>PLAY NOW</button>
      </div>
    )
};

export default Home;