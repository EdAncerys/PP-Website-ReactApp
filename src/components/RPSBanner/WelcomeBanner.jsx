import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import { RPSContext } from '../../pages/RPSPage';

import { GiGingerbreadMan } from 'react-icons/gi';
import { FaRobot } from 'react-icons/fa';

import PagePalette from '../../config/PagePalette';
import RPSAvatar from './RPSAvatar';
import PlayButton from './PlayButton';
import RPSComponent from './RPSComponent';
import ScoreBoard from './ScoreBoard';

export default function WelcomeBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const { manageRPSContext } = useContext(RPSContext);

  const [timer, setTimer] = useState(false);

  const game = manageRPSContext.game;
  const playerChoice = manageRPSContext.playerChoice;

  const handleR2D2Colors = () => {
    if (timer) console.log('bang');
    setTimeout(() => console.log('test'), 2000);
    // console.log(timer);
  };

  // useEffect(() => {
  //   if (playerChoice) {
  //     setInterval(() => handleR2D2Colors(), 500);
  //     setTimeout(() => setTimer(false), 2000);
  //   }
  // }, [timer]);

  useEffect(() => {
    console.log(timer);
    setTimer(true);
    if (playerChoice) setInterval(() => handleR2D2Colors(), 500);
  }, [playerChoice]);

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
        <RPSAvatar name="Player" avatar={<GiGingerbreadMan size="10vh" />} />
        <ScoreBoard />
        <RPSAvatar name="R2-D2" avatar={<FaRobot size="10vh" />} />
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
  playButton: {
    display: 'grid',
    justifyContent: 'center',
  },
};
