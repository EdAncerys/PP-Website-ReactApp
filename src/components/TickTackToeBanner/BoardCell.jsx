import React, { useContext } from 'react';
import { AppContext } from '../../App';

export default function BoardCell({ id }) {
  const { manageAppContext } = useContext(AppContext);

  const handleClick = (data) => {
    const id = data.target.id;
    const player = manageAppContext.playerOneMove;

    if (player)
      manageAppContext.setPlayerOne([...manageAppContext.playerOne, id]);
    if (!player)
      manageAppContext.setPlayerTwo([...manageAppContext.playerTwo, id]);
    manageAppContext.setPlayerOneMove(!player);
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
