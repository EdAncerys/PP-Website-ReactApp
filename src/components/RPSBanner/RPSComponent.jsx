import React, { useContext } from 'react';
import { RPSContext } from '../../pages/RPSPage';
import RPSAvatar from './RPSAvatar';

import { FaRegHandRock } from 'react-icons/fa';
import { FaRegHandPaper } from 'react-icons/fa';
import { FaRegHandScissors } from 'react-icons/fa';
import PlayButton from './PlayButton';

export default function RPSComponent({ props }) {
  const { manageRPSContext } = useContext(RPSContext);

  const playerChoice = manageRPSContext.playerChoice;
  const fade = playerChoice ? 0.2 : 1;

  const handleClick = (name) => {
    if (!playerChoice) manageRPSContext.setPlayerChoice(name);
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div
          style={{ opacity: playerChoice === 'Rock' ? 1 : fade }}
          onClick={() => handleClick('Rock')}
        >
          <RPSAvatar name="Rock" avatar={<FaRegHandRock size="6vh" />} />
        </div>
        <div
          style={{ opacity: playerChoice === 'Paper' ? 1 : fade }}
          onClick={() => handleClick('Paper')}
        >
          <RPSAvatar name="Paper" avatar={<FaRegHandPaper size="6vh" />} />
        </div>
        <div
          style={{ opacity: playerChoice === 'Scissors' ? 1 : fade }}
          onClick={() => handleClick('Scissors')}
        >
          <RPSAvatar
            name="Scissors"
            avatar={<FaRegHandScissors size="6vh" />}
          />
        </div>
      </div>
      <PlayButton title="Play Again" />
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    justifyContent: 'center',
    alignItems: 'center',
    gridGap: '5vw',
  },
};
