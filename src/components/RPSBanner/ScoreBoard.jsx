import React, { useContext } from 'react';
import { RPSContext } from '../../pages/RPSPage';

import colors from '../../config/colors';

export default function Scorewrapper({ props }) {
  const { manageRPSContext } = useContext(RPSContext);

  const game = manageRPSContext.game;
  const playerScore = manageRPSContext.playerScore;
  const robotScore = manageRPSContext.robotScore;

  return (
    <div>
      {!game && <div style={styles.vs}>vs</div>}
      {game && (
        <div>
          <div style={styles.roundScore}>
            <div style={styles.title}>Round</div>
            <div style={styles.title}>{playerScore}</div>
          </div>
          <div style={styles.container}>
            <div style={styles.wrapper}>
              <div style={styles.title}>Wins</div>
              <div style={styles.score}>{playerScore}</div>
            </div>
            <div style={{ display: 'grid', color: colors.red }}>
              <div style={styles.title}>Ties</div>
              <div style={styles.score}>{robotScore}</div>
            </div>
            <div style={styles.wrapper}>
              <div style={styles.title}>Wins</div>
              <div style={styles.score}>{robotScore}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  roundScore: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'auto auto',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: '3vh',
  },
  vs: {
    fontSize: '5vh',
  },
  wrapper: {
    display: 'grid',
    color: colors.red,
  },
  title: {
    // gridColumn: '1 / 2',
    alignSelf: 'end',
    fontSize: '3vh',
  },
  score: {
    display: 'grid',
    alignContent: 'start',
    fontSize: '5vh',
  },
};
