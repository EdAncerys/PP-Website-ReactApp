import React from 'react';

export default function PPPage({ props }) {
  return (
    <div className="teko" style={styles.container}>
      <div style={styles.content}>PP Page</div>
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
