import React from 'react';
import { GiGingerbreadMan } from 'react-icons/gi';

export default function RPSPlayer({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.player}>
        <div style={styles.name}>Player</div>
        <GiGingerbreadMan size="10vh" />
      </div>
    </div>
  );
}

const styles = {
  container: {},
};
