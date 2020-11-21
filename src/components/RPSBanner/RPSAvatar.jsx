import React from 'react';

export default function RPSAvatar({ name, avatar }) {
  return (
    <div style={styles.container}>
      <div style={styles.name}>{name}</div>
      <div>{avatar}</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
  },
  name: {
    fontSize: '2.5vh',
  },
};
