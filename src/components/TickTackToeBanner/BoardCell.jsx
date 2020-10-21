import React, { useContext } from 'react';
import { AppContext } from '../../App';

export default function BoardCell({ props }) {
  const { manageAppContext } = useContext(AppContext);

  const handleClick = (data) => {
    const moveOne = manageAppContext.playOneMove
    const id = data.target.id

    if(moveOne) console.log(id)
    if(!moveOne) console.log(id)
    manageAppContext.setPlayerOneMove(!moveOne)
  }

  return (
    <div id='1' style={styles.container} onClick={(e) => handleClick(e)}>
      <div>hello</div>
    </div>
  );
}

const styles = {
  container: {
    cursor: 'pointer'
  }
};
