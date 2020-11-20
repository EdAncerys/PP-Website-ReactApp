import React, { useContext } from 'react';
import { RPSContext } from '../../pages/RPSPage';

import colors from '../../config/colors';

export default function ScoreBoard({ props }) {
  const { manageRPSContext } = useContext(RPSContext);

  const game = manageRPSContext.game;
  const playerScore = manageRPSContext.playerScore;
  const robotScore = manageRPSContext.robotScore;

  return (
    <div style={styles.container}>
      {!game && <div style={styles.vs}>vs</div>}
      {game && (
        <div style={styles.wrapper}>
          <div style={styles.board}>
            <div style={styles.title}>Wins</div>
            <div style={styles.score}>{playerScore}</div>
          </div>
          <div style={{ display: 'grid', color: colors.red }}>
            <div style={styles.title}>Ties</div>
            <div style={styles.score}>{robotScore}</div>
          </div>
          <div style={styles.board}>
            <div style={styles.title}>Wins</div>
            <div style={styles.score}>{robotScore}</div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {},
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: '3vh',
  },
  vs: {
    fontSize: '5vh',
  },
  board: {
    display: 'grid',
    color: colors.red,
  },
  title: {
    fontSize: '4vh',
  },
  score: {
    alignSelf: 'start',
    fontSize: '7vh',
  },
};
