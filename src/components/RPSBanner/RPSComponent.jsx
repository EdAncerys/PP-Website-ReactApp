import React, { useContext } from 'react';
import { RPSContext } from '../../pages/RPSPage';

export default function RPSComponent({ props }) {
  const { manageRPSContext } = useContext(RPSContext);

  return (
    <div style={styles.container}>
      <div>{manageRPSContext.round}</div>
    </div>
  );
}

const styles = {
  container: {},
};
