import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';
import { AppContext } from '../../App';
import Button from '../Button';

import PagePalette from '../../config/PagePalette';
import Character from './Character';
import GameBoard from './GameBoard';

export default function PlayerVPlayerBanner({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);
  const { manageAppContext } = useContext(AppContext);

  const handlePlayAgain = () => {
    manageTickTackToeContext.setTakenTiles([]);
    manageTickTackToeContext.setPlayerOneTiles([]);
    manageTickTackToeContext.setPlayerTwoTiles([]);
    manageTickTackToeContext.setGameOn(true);
    manageTickTackToeContext.setWinner(false);
  };

  const handleNewGame = () => {
    manageTickTackToeContext.setPlayerOne(false);
    manageTickTackToeContext.setPlayerTwo(false);
    handlePlayAgain();
  };

  return (
    <div
      style={{
        ...styles.container,
        ...{ color: PagePalette[manageAppContext.page].primary },
      }}
    >
      <div style={styles.wrapper}>
        <Character
          src={manageTickTackToeContext.playerOne.img}
          name={manageTickTackToeContext.playerOne.name}
        />
        <div className="teko" style={styles.message}>
          {manageTickTackToeContext.gameOn &&
            `${manageTickTackToeContext.playerOneScore} vs ${manageTickTackToeContext.playerTwoScore}`}
          {!manageTickTackToeContext.winner &&
            !manageTickTackToeContext.gameOn &&
            'Game Over'}
          {manageTickTackToeContext.winner &&
            `${manageTickTackToeContext.winner.name} won this round`}
        </div>
        <Character
          src={manageTickTackToeContext.playerTwo.img}
          name={manageTickTackToeContext.playerTwo.name}
        />
      </div>
      <div style={styles.gameBoard}>
        <GameBoard />
      </div>
      <div style={styles.buttonComponent}>
        <Button title="Play Again" onClick={() => handlePlayAgain()} />
        <Button
          title="New Game"
          solid={false}
          onClick={() => handleNewGame()}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    rowGap: 50,
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    alignContent: 'center',
    justifyItems: 'center',
    columnGap: 100,
  },
  message: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    minWidth: 350,
  },
  gameBoard: {
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
  },
  buttonComponent: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyItems: 'center',
    alignContent: 'center',
  },
};
