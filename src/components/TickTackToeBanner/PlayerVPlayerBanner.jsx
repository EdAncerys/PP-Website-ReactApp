import React, { useContext } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';

export default function PlayerVPlayerBanner({ props }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

  const handleImageClick = () => {
    console.log('click');
  };

  return (
    <div style={styles.container}>
      <div>
        {manageTickTackToeContext.playerOne.name}
        <div>v</div>
        {manageTickTackToeContext.playerTwo.name}
      </div>
      <div style={styles.wrapper}>
        <div style={styles.img}>
          {manageTickTackToeContext.playerOne.name}
          <img
            style={{ height: '15vh' }}
            alt={manageTickTackToeContext.playerOne.id}
            src={manageTickTackToeContext.playerOne.img}
            onClick={(data) => handleImageClick()}
          />
        </div>
        <img
          style={{ height: '15vh' }}
          alt={manageTickTackToeContext.playerOne.id}
          src={manageTickTackToeContext.playerTwo.img}
          onClick={(data) => handleImageClick()}
        />
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
    gridTemplateColumns: 'auto auto',
    alignContent: 'center',
    justifyItems: 'center',
    columnGap: 100,
    backgroundColor: 'tomato',
  },
};
