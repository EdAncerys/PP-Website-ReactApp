import React, { useContext } from 'react';
import PagePalette from '../../config/PagePalette';
import { TickTackToeContext } from '../../pages/TickTackToePage';
import Button from '../Button';

export default function PlayerVPlayerBanner({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

  const handleImageClick = () => {
    console.log('click');
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapperOne}>
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
      <div>
        <Button />
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
    color: PagePalette[3].primary,
  },
  wrapperOne: {
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
