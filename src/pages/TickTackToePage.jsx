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
import Footer from '../components/Footer';
import Header from '../components/Header';
import colors from '../config/colors';

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
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const [playerOneMove, setPlayerOneMove] = useState(true);
  const [gameOn, setGameOn] = useState(true);
  const [winner, setWinner] = useState(false);

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
    playerOneScore: playerOneScore,
    setPlayerOneScore: setPlayerOneScore,
    setPlayerTwoScore: setPlayerTwoScore,
    playerTwoScore: playerTwoScore,
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
    winner: winner,
    setWinner: setWinner,
  };

  const winningCombo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [7, 5, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];

  const handleWinner = () => {
    winningCombo.forEach((combo) => {
      if (combo.every((tiles) => playerOneTiles.includes(tiles))) {
        setGameOn(false);
        setWinner(playerOne);
        setPlayerOneScore(playerOneScore + 1);
      }
      if (combo.every((tiles) => playerTwoTiles.includes(tiles))) {
        setGameOn(false);
        setWinner(playerTwo);
        setPlayerTwoScore(playerTwoScore + 1);
      }
    });
  };

  useEffect(() => {
    handleWinner();
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
      setWinner(userSession.winner);
      setPlayerOneScore(userSession.playerOneScore);
      setPlayerTwoScore(userSession.playerTwoScore);
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
      <div style={styles.container}>
        <div>
          <Header color={colors.white} />
        </div>
        <div className="family" style={styles.content}>
          {!playerTwo && <FamilyGuyCharacters />}
          {playerTwo && <PlayerVPlayerBanner />}
        </div>
        <div style={styles.footer}>
          <Footer />
        </div>
      </div>
    </TickTackToeContext.Provider>
  );
}

const styles = {
  container: {
    display: 'grid',
    width: '100vw',
    height: '100vh',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',

    userSelect: 'none',
    cursor: 'default',
  },
  content: {
    display: 'grid',
    gridColumn: 'span 6',
    gridRow: '1 / 4',
    marginTop: '12vh',
    gridGap: 10,
    textAlign: 'justify',
  },
  footer: {
    gridRow: '6 / 6',
    gridColumn: 'span 6',
  },
};
