import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Brian from '../img/TickTackToeImg/Brian.png';
import Chris from '../img/TickTackToeImg/Chris.png';
import Glenn from '../img/TickTackToeImg/Glenn.png';
import Herbert from '../img/TickTackToeImg/Herbert.png';
import Joe from '../img/TickTackToeImg/Joe.png';
import Lois from '../img/TickTackToeImg/Lois.png';
import Meg from '../img/TickTackToeImg/Meg.png';
import Peter from '../img/TickTackToeImg/Peter.png';
import Stewie from '../img/TickTackToeImg/Stewie.png';

import FamilyGuyCharacters from '../components/TickTackToeBanner/FamilyGuyCharacters';
import PlayerVPlayerBanner from '../components/TickTackToeBanner/PlayerVPlayerBanner';

export const TickTackToeContext = React.createContext();

const characters = [
  {
    name: 'Brian',
    img: Brian,
    id: uuidv4(),
  },
  { name: 'Chris', img: Chris, id: uuidv4() },
  { name: 'Glenn', img: Glenn, id: uuidv4() },
  {
    name: 'Herbert',
    img: Herbert,
    id: uuidv4(),
  },
  { name: 'Joe', img: Joe, id: uuidv4() },
  { name: 'Lois', img: Lois, id: uuidv4() },
  {
    name: 'Meg',
    img: Meg,
    id: uuidv4(),
  },
  { name: 'Peter', img: Peter, id: uuidv4() },
  { name: 'Stewie', img: Stewie, id: uuidv4() },
];

export default function TickTackToePage({ props }) {
  const [familyCharacters, setFamilyCharacters] = useState(characters);
  const [playerOne, setPlayerOne] = useState(false);
  const [playerTwo, setPlayerTwo] = useState(false);
  const [playerOneMove, setPlayerOneMove] = useState(true);
  const [gameOn, setGameOn] = useState(true);

  const [takenTiles, setTakenTiles] = useState([]);
  const [playerOneTiles, setPlayerOneTiles] = useState([]);
  const [playerTwoTiles, setPlayerTwoTiles] = useState([]);

  const manageTickTackToeContext = {
    characters: characters,
    familyCharacters: familyCharacters,
    setFamilyCharacters: setFamilyCharacters,
    playerOne: playerOne,
    setPlayerOne: setPlayerOne,
    playerTwo: playerTwo,
    setPlayerTwo: setPlayerTwo,
    playerOneMove: playerOneMove,
    setPlayerOneMove: setPlayerOneMove,

    takenTiles: takenTiles,
    setTakenTiles: setTakenTiles,
    playerOneTiles: playerOneTiles,
    setPlayerOneTiles: setPlayerOneTiles,
    playerTwoTiles: playerTwoTiles,
    setPlayerTwoTiles: setPlayerTwoTiles,

    gameOn: gameOn,
    setGameOn: setGameOn,
  };

  useEffect(() => {
    // console.log(playerOneTiles, playerTwoTiles);
  }, [takenTiles]);

  const SESSION_STORAGE_KEY = 'EdAncerysPortfolioWebSite.TickTackToe';

  useEffect(() => {
    const data = sessionStorage.getItem(SESSION_STORAGE_KEY);
    const userSession = JSON.parse(data);
    if (userSession) {
      setPlayerOne(userSession.playerOne);
      setPlayerTwo(userSession.playerTwo);
      setTakenTiles(userSession.takenTiles);
      setPlayerOneTiles(userSession.playerOneTiles);
      setPlayerTwoTiles(userSession.playerTwoTiles);
      setGameOn(userSession.gameOn);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify(manageTickTackToeContext)
    );
  }, [manageTickTackToeContext]);

  return (
    <TickTackToeContext.Provider
      value={{
        manageTickTackToeContext,
      }}
    >
      <div className="family" style={styles.container}>
        <div style={styles.content}>
          {!playerTwo && <FamilyGuyCharacters />}
          {playerTwo && <PlayerVPlayerBanner />}
        </div>
      </div>
    </TickTackToeContext.Provider>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    userSelect: 'none',
    cursor: 'default',
  },
  content: {
    display: 'grid',
    width: 600,
    marginTop: 100,
    marginBottom: 100,
    gridGap: 10,
    textAlign: 'justify',
  },
};
