import React, { useState, useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';
import { useAvatar } from '../../hooks/useAvatar';

import colors from '../../config/colors';

export default function BoardSquare({ id }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

  let takenTiles = manageTickTackToeContext.takenTiles;
  let playerOneTiles = manageTickTackToeContext.playerOneTiles;
  let playerTwoTiles = manageTickTackToeContext.playerTwoTiles;
  let player = manageTickTackToeContext.playerOneMove;

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
    color: colors.red,
    fontSize: 60,
  },
};
