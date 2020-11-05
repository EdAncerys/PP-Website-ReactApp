import React, { useState, useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';
import { useAvatar } from '../../hooks/useAvatar';

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

  // const avatarIcon = {
  //   Brian: <GiAmericanFootballHelmet size={35} />,
  //   Chris: <GiAquarium size={35} />,
  //   Glenn: <GiCatapult size={35} />,
  //   Herbert: <GiGaulsHelm size={35} />,
  //   Joe: <GiHamburger size={35} />,
  //   Lois: <GiHelicoprion size={35} />,
  //   Meg: <GiAmmonite size={35} />,
  //   Peter: <GiAnglerFish size={35} />,
  //   Stewie: <GiGoat size={35} />,
  // };

  let takenTiles = manageTickTackToeContext.takenTiles;
  let playerOneTiles = manageTickTackToeContext.playerOneTiles;
  let playerTwoTiles = manageTickTackToeContext.playerTwoTiles;
  let player = manageTickTackToeContext.playerOneMove;

  // let playerOneAvatar = avatarIcon[manageTickTackToeContext.playerOne.name];
  // let playerTwoAvatar = avatarIcon[manageTickTackToeContext.playerTwo.name];
  let playerOneAvatar = useAvatar(manageTickTackToeContext.playerOne.name);
  let playerTwoAvatar = useAvatar(manageTickTackToeContext.playerTwo.name);

  const handleClick = () => {
    if (!takenTiles.includes(id) && manageTickTackToeContext.gameOn) {
      if (player) {
        manageTickTackToeContext.setPlayerOneTiles([...playerOneTiles, id]);
      }
      if (!player) {
        manageTickTackToeContext.setPlayerTwoTiles([...playerTwoTiles, id]);
      }
      manageTickTackToeContext.setTakenTiles([...takenTiles, id]);
      manageTickTackToeContext.setPlayerOneMove(!player);
      if (takenTiles.length === 8) manageTickTackToeContext.setGameOn(false);
    }
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
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: 60,
    height: 60,
  },
  avatar: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    fontSize: 40,
  },
};
