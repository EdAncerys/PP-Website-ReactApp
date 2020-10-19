import React, { useState, useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';
import { AppContext } from '../../App';
import Button from '../Button';

import PagePalette from '../../config/PagePalette';

export default function PlayerVPlayerBanner({ props }) {
  const [clickEffect, setClickEffect] = useState(false);
  const { manageTickTackToeContext } = useContext(TickTackToeContext);
  const { manageAppContext } = useContext(AppContext);

  const handleImageClick = () => {
    setClickEffect(true);
    setTimeout(() => {
      setClickEffect(false);
    }, 200);
  };

  const handlePlayAgain = () => {
    manageTickTackToeContext.setPlayerOne(false);
    manageTickTackToeContext.setPlayerTwo(false);
  };

  return (
    <div
      style={{
        ...styles.container,
        ...{ color: PagePalette[manageAppContext.page].primary },
      }}
    >
      <div style={styles.wrapper}>
        <div style={{...styles.img, ...{ transform: clickEffect ? 'scale(0.90)' : 'scale(1)'}}}>
          <div style={styles.name}>
            {manageTickTackToeContext.playerOne.name}
          </div>
          <img
            style={{ height: '15vh' }}
            alt={manageTickTackToeContext.playerOne.id}
            src={manageTickTackToeContext.playerOne.img}
            onClick={(data) => handleImageClick()}
          />
        </div>
        <div style={styles.vs}>vs</div>
        <div style={styles.img}>
          <div style={styles.name}>
            {manageTickTackToeContext.playerTwo.name}
          </div>
          <img
            style={{ height: '15vh' }}
            alt={manageTickTackToeContext.playerTwo.id}
            src={manageTickTackToeContext.playerTwo.img}
            onClick={(data) => handleImageClick()}
          />
        </div>
      </div>
        <div
          style={styles.buttonComponent}
        >
          <Button title="Play Again" onClick={() => handlePlayAgain()} />
          <Button title="New Game" solid={false} onClick={() => handlePlayAgain()} />
        </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    rowGap: 100,
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    alignContent: 'center',
    justifyItems: 'center',
    columnGap: 100,
  },
  name: {
    display: 'grid',
    justifyContent: 'center',
    marginBottom: 10,
  },
  vs: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 30,
  },
  buttonComponent: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyItems: 'center',
    alignContent: 'center',
  }
};
