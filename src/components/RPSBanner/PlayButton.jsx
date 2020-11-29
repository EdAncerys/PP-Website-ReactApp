import React, { useContext } from 'react';
import { RPSContext } from '../../pages/RPSPage';

import { BsPlayFill } from 'react-icons/bs';

export default function PlayButton({ title = 'title' }) {
  const { manageRPSContext } = useContext(RPSContext);

  const game = manageRPSContext.game;

  const handlePlayClick = () => {
    manageRPSContext.setGame(!game);
  };

  return (
    <div style={styles.container} onClick={() => handlePlayClick()}>
      <div style={styles.btnText}>{title}</div>
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
    border: '1px solid',
    borderRadius: 20,
    marginTop: 20,
  },
  btnText: {
    fontSize: '3vh',
    marginLeft: '2vh',
  },
};
