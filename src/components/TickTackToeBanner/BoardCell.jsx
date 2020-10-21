import React, { useContext } from 'react';
import { AppContext } from '../../App';

export default function BoardCell({ id }) {
  const { manageAppContext } = useContext(AppContext);

  const handleClick = (data) => {
    const moveOne = manageAppContext.playOneMove;
    const id = data.target.id;

    // if(moveOne) manageAppContext.setPlayerOne(id)
    // if(!moveOne) manageAppContext.setPlayerTwo(id)
    console.log(id);
    manageAppContext.setPlayerOneMove(!moveOne);
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
