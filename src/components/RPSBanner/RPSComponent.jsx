import React, { useContext } from 'react';
import { RPSContext } from '../../pages/RPSPage';
import RPSAvatar from './RPSAvatar';

import { FaRegHandRock } from 'react-icons/fa';
import { FaRegHandPaper } from 'react-icons/fa';
import { FaRegHandScissors } from 'react-icons/fa';

export default function RPSComponent({ props }) {
  const { manageRPSContext } = useContext(RPSContext);

  const playerChoice = manageRPSContext.playerChoice;

  const handleClick = (name) => {
    manageRPSContext.setPlayerChoice(name);
  };

  return (
    <div style={styles.container}>
      <div
        style={{ opacity: playerChoice !== 'Rock' ? 1 : 0.2 }}
        onClick={() => console.log('Rock')}
      >
        <RPSAvatar name="Rock" avatar={<FaRegHandRock size="6vh" />} />
      </div>
      <div
        style={{ opacity: playerChoice !== 'Paper' ? 1 : 0.2 }}
        onClick={() => console.log('Paper')}
      >
        <RPSAvatar name="Paper" avatar={<FaRegHandPaper size="6vh" />} />
      </div>
      <div
        style={{ opacity: playerChoice !== 'Scissors' ? 1 : 0.2 }}
        onClick={() => console.log('Scissors')}
      >
        <RPSAvatar name="Scissors" avatar={<FaRegHandScissors size="6vh" />} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    justifyContent: 'center',
    alignItems: 'center',
    gridGap: '5vw',
  },
};
