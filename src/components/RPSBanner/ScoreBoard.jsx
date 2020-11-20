import React from 'react';

export default function ScoreBoard({ props }) {
  return (
    <div style={styles.container}>
      {!game && <div style={styles.vs}>vs</div>}
      {game && (
        <div style={styles.wrapper}>
          <div style={styles.score}>{playerScore}</div>
          <div style={styles.vs}>vs</div>
          <div style={styles.score}>{robotScore}</div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {},
};
