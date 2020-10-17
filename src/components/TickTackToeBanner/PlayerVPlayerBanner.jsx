import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';

export default function PlayerVPlayerBanner({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

  const handleImageClick = () => {
    console.log('click');
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.img}>
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
        <div style={styles.vs}>v</div>
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
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    alignContent: 'center',
    justifyItems: 'center',
    rowGap: 50,
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
};
