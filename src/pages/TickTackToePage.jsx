import React, { useState } from 'react';
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

export const TickTackToeContext = React.createContext();

export default function TickTackToePage({ props }) {
  const [playerOne, setPlayerOne] = useState();
  const [playerTwo, setPlayerTwo] = useState();

  const characters = [
    Brian,
    Chris,
    Glenn,
    Herbert,
    Joe,
    Lois,
    Meg,
    Peter,
    Stewie,
  ];

  const manageTickTackToeContext = { test: 'TickTackToe test context' };

  return (
    <TickTackToeContext.Provider
      value={{
        manageTickTackToeContext,
      }}
    >
      <div style={styles.container}>
        <div style={styles.content}>
          <FamilyGuyCharacters />
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
