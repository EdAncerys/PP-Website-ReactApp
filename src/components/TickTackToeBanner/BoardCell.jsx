import React, { useContext } from 'react';
import { AppContext } from '../../App';

export default function BoardCell({ id }) {
  const { manageAppContext } = useContext(AppContext);
  const player = manageAppContext.playOneMove;

  const handleClick = (data) => {
    const id = data.target.id;

    if (player) {
      manageAppContext.setPlayerOne([...manageAppContext.playerOne, id]);
      manageAppContext.setPlayerOneMove(!player);
    }
    if (!player) {
      manageAppContext.setPlayerTwo([...manageAppContext.playerTwo, id]);
      manageAppContext.setPlayerOneMove(!player);
    }
    console.log(manageAppContext.playOneMove);
  };

  return (
    <div
      className="bangers"
      style={styles.container}
      onClick={(data) => handleClick(data)}
    >
      <div id={id}>{id}</div>
    </div>
  );
}

const styles = {
  container: {
    cursor: 'pointer',
  },
};
