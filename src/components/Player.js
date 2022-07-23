import { useParams } from 'react-router-dom';



const Player = (player) => {
  const playerOne = useParams();
  console.log(playerOne);

  return (
    <div>
      <img src="" alt="selected player" />
      <ul>
        <li>Hit Points: {player.base[0]}</li>
        <li>Attack Power: {player.base[1]}</li>
        <li>Defense Power: {player.base[2]}</li>
        <li>Speed: {player.base[5]}</li>
      </ul>
    </div>
  );
};

export default Player;


