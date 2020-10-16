import React, { useState } from 'react';
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

export default function TickTackToePage({ props }) {
  const [playerOne, setPlayerOne] = useState();
  const [playerTwo, setPlayerTwo] = useState();

  const characters = [
    { name: Brian, id: uuidv4() },
    { name: Chris, id: uuidv4() },
    { name: Glenn, id: uuidv4() },
    { name: Herbert, id: uuidv4() },
    { name: Joe, id: uuidv4() },
    { name: Lois, id: uuidv4() },
    { name: Meg, id: uuidv4() },
    { name: Peter, id: uuidv4() },
    { name: Stewie, id: uuidv4(), lastChild: true },
  ];

  const manageTickTackToeContext = {
    characters: characters,
    playerOne: playerOne,
    setPlayerOne: setPlayerOne,
    playerTwo: playerTwo,
    setPlayerTwo: setPlayerTwo,
  };

  return (
    <TickTackToeContext.Provider
      value={{
        manageTickTackToeContext,
      }}
    >
      <div style={styles.container}>
        <div style={styles.content}>
         {!playerTwo && <FamilyGuyCharacters />}
         {playerTwo && <PlayerVPlayerBanner/>}
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
