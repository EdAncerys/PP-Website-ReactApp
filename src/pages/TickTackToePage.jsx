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

import { GiAmericanFootballHelmet } from 'react-icons/gi';
import { GiAquarium } from 'react-icons/gi';
import { GiCatapult } from 'react-icons/gi';
import { GiGaulsHelm } from 'react-icons/gi';
import { GiHamburger } from 'react-icons/gi';
import { GiHelicoprion } from 'react-icons/gi';
import { GiAmmonite } from 'react-icons/gi';
import { GiAnglerFish } from 'react-icons/gi';
import { GiGoat } from 'react-icons/gi';

export const TickTackToeContext = React.createContext();

const characters = [
  {
    name: 'Brian',
    img: Brian,
    id: uuidv4(),
    icon: <GiAmericanFootballHelmet size={35} />,
  },
  { name: 'Chris', img: Chris, id: uuidv4(), icon: <GiAquarium size={35} /> },
  { name: 'Glenn', img: Glenn, id: uuidv4(), icon: <GiCatapult size={35} /> },
  {
    name: 'Herbert',
    img: Herbert,
    id: uuidv4(),
    icon: <GiGaulsHelm size={35} />,
  },
  { name: 'Joe', img: Joe, id: uuidv4(), icon: <GiHamburger size={35} /> },
  { name: 'Lois', img: Lois, id: uuidv4(), icon: <GiHelicoprion size={35} /> },
  {
    name: 'Meg',
    img: Meg,
    id: uuidv4(),
    icon: <GiAmmonite size={35} />,
  },
  { name: 'Peter', img: Peter, id: uuidv4(), icon: <GiAnglerFish size={35} /> },
  { name: 'Stewie', img: Stewie, id: uuidv4(), icon: <GiGoat size={35} /> },
];

export default function TickTackToePage({ props }) {
  const [playerOne, setPlayerOne] = useState(false);
  const [playerTwo, setPlayerTwo] = useState(false);
  const [familyCharacters, setFamilyCharacters] = useState(characters);

  const manageTickTackToeContext = {
    familyCharacters: familyCharacters,
    setFamilyCharacters: setFamilyCharacters,
    characters: characters,
    playerOne: playerOne,
    setPlayerOne: setPlayerOne,
    playerTwo: playerTwo,
    setPlayerTwo: setPlayerTwo,
  };

  const SESSION_STORAGE_KEY = 'EdAncerysPortfolioWebSite.TickTackToe';

  useEffect(() => {
    const data = sessionStorage.getItem(SESSION_STORAGE_KEY);
    const userSession = JSON.parse(data);
    if (userSession) {
      setPlayerOne(userSession.playerOne);
      setPlayerTwo(userSession.playerTwo);
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
