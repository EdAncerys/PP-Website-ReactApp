import React, { useState, useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';

import { GiAmericanFootballHelmet } from 'react-icons/gi';
import { GiAquarium } from 'react-icons/gi';
import { GiCatapult } from 'react-icons/gi';
import { GiGaulsHelm } from 'react-icons/gi';
import { GiHamburger } from 'react-icons/gi';
import { GiHelicoprion } from 'react-icons/gi';
import { GiAmmonite } from 'react-icons/gi';
import { GiAnglerFish } from 'react-icons/gi';
import { GiGoat } from 'react-icons/gi';

export default function BoardSquare({ id }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

  const avatarIcon = {
    Brian: <GiAmericanFootballHelmet size={35} />,
    Chris: <GiAquarium size={35} />,
    Glenn: <GiCatapult size={35} />,
    Herbert: <GiGaulsHelm size={35} />,
    Joe: <GiHamburger size={35} />,
    Lois: <GiHelicoprion size={35} />,
    Meg: <GiAmmonite size={35} />,
    Peter: <GiAnglerFish size={35} />,
    Stewie: <GiGoat size={35} />,
  };

  let takenTiles = manageTickTackToeContext.takenTiles;
  let playerOneTiles = manageTickTackToeContext.playerOneTiles;
  let playerTwoTiles = manageTickTackToeContext.playerTwoTiles;

  let playerOneAvatar = avatarIcon[manageTickTackToeContext.playerOne.name];
  let playerTwoAvatar = avatarIcon[manageTickTackToeContext.playerTwo.name];

  if (takenTiles.length === 8) manageTickTackToeContext.setGameOn(false);

  const handleClick = () => {
    const player = manageTickTackToeContext.playerOneMove;
    if (player) {
      manageTickTackToeContext.setPlayerOneTiles([...playerOneTiles, id]);
    }
    if (!player) {
      manageTickTackToeContext.setPlayerTwoTiles([...playerTwoTiles, id]);
    }
    manageTickTackToeContext.setTakenTiles([...takenTiles, id]);
    manageTickTackToeContext.setPlayerOneMove(!player);
  };

  return (
    <div
      className="bangers"
      style={styles.container}
      onClick={() => handleClick()}
    >
      <div id={id} style={styles.avatar}>
        {playerOneTiles.includes(id) && playerOneAvatar}
        {playerTwoTiles.includes(id) && playerTwoAvatar}
      </div>
    </div>
  );
}

const styles = {
  container: {
    cursor: 'pointer',
  },
  avatar: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    size: 30,
  },
};
