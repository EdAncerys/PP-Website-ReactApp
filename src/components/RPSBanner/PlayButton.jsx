import React, { useContext } from 'react';
import { RPSContext } from '../../pages/RPSPage';

import { BsPlayFill } from 'react-icons/bs';

export default function PlayButton({ props }) {
  const { manageRPSContext } = useContext(RPSContext);

  const game = manageRPSContext.game;

  const handlePlayClick = () => {
    manageRPSContext.setGame(!game);
  };

  return (
    <div style={styles.container} onClick={() => handlePlayClick()}>
      <div style={styles.btnText}>Play</div>
      <BsPlayFill size="5vh" />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridTemplateColumns: 'auto auto auto',
    cursor: 'pointer',
  },
  btnText: {
    fontSize: '3vh',
  },
};
