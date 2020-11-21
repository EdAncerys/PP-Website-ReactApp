import React, { useContext } from 'react';
import { RPSContext } from '../../pages/RPSPage';
import RPSAvatar from './RPSAvatar';

import { FaRegHandRock } from 'react-icons/fa';
import { FaRegHandPaper } from 'react-icons/fa';
import { FaRegHandScissors } from 'react-icons/fa';

export default function RPSComponent({ props }) {
  const { manageRPSContext } = useContext(RPSContext);

  return (
    <div style={styles.container}>
      <RPSAvatar name="Rock" avatar={<FaRegHandRock size="6vh" />} />
      <RPSAvatar name="Paper" avatar={<FaRegHandPaper size="6vh" />} />
      <RPSAvatar name="Scissors" avatar={<FaRegHandScissors size="6vh" />} />
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
