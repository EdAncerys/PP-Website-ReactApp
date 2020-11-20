import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { RPSContext } from '../../pages/RPSPage';

import { GiGingerbreadMan } from 'react-icons/gi';
import { FaRobot } from 'react-icons/fa';

import PagePalette from '../../config/PagePalette';
import RPSPlayer from './RPSPlayer';
import PlayButton from './PlayButton';
import colors from '../../config/colors';
import RPSComponent from './RPSComponent';

export default function WelcomeBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const { manageRPSContext } = useContext(RPSContext);

  const game = manageRPSContext.game;
  const playerScore = manageRPSContext.playerScore;
  const robotScore = manageRPSContext.robotScore;

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: PagePalette[manageAppContext.page].secondary,
      }}
    >
      <div style={styles.title}>
        {!game && <div>Hi and Welcome To The RPS Game</div>}
        {game && <div>Rock Paper Scissors</div>}
      </div>
      <div style={styles.content}>
        <RPSPlayer name="Player" avatar={<GiGingerbreadMan size="10vh" />} />
        <div>
          {!game && <div style={styles.vs}>vs</div>}
          {game && (
            <div style={styles.wrapper}>
              <div style={styles.score}>{playerScore}</div>
              <div style={styles.vs}>vs</div>
              <div style={styles.score}>{robotScore}</div>
            </div>
          )}
        </div>
        <RPSPlayer name="R2-D2 The Robot" avatar={<FaRobot size="10vh" />} />
      </div>
      <div>
        {game && <RPSComponent />}
        {!game && (
          <div style={styles.playButton}>
            <PlayButton />
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  title: {
    fontSize: '5vh',
  },
  content: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridGap: '5vh',
    gridTemplateColumns: 'auto auto auto',
    margin: '2vh',
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: '3vh',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  vs: {
    fontSize: '5vh',
  },
  score: {
    fontSize: '7vh',
    color: colors.red,
  },
  playButton: {
    display: 'grid',
    justifyContent: 'center',
  },
};
