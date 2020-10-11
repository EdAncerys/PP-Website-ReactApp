import React from 'react';

export default function TickTackToePage({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div>TicTackToe Page</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    userSelect: 'none',
    cursor: 'default',
  },
  content: {
    display: 'grid',
    width: 600,
    marginTop: 100,
    marginBottom: 100,
    gridGap: 10,
    textAlign: 'justify',
  },
};
