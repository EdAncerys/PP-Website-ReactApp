import React from 'react';
import { GiGingerbreadMan } from 'react-icons/gi';

export default function RPSPlayer({ name }) {
  return (
    <div style={styles.container}>
      <div style={styles.name}>Player</div>
      <GiGingerbreadMan size="10vh" />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  name: {
    fontSize: '2.5vh',
  },
};
