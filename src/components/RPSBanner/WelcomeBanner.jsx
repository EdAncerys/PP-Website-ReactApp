import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import { RPSContext } from '../../pages/RPSPage';

import { GiGingerbreadMan } from 'react-icons/gi';
import { FaRobot } from 'react-icons/fa';

import PagePalette from '../../config/PagePalette';
import RPSAvatar from './RPSAvatar';
import PlayButton from './PlayButton';
import RPSComponent from './RPSComponent';
import ScoreBoard from './ScoreBoard';
import { FaRegHandRock } from 'react-icons/fa';
import { FaRegHandPaper } from 'react-icons/fa';
import { FaRegHandScissors } from 'react-icons/fa';

import colors from '../../config/colors';

export default function WelcomeBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const { manageRPSContext } = useContext(RPSContext);

  const game = manageRPSContext.game;
  const playerChoice = manageRPSContext.playerChoice
    ? manageRPSContext.playerChoice
    : false;
  const R2D2Choice = manageRPSContext.R2D2Choice
    ? manageRPSContext.R2D2Choice
    : false;

  const colorPalate = [
    colors.yellow,
    colors.gold,
    colors.darkBlue,
    colors.blue,
    colors.mint,
    colors.cucumber,
    colors.green,
    colors.blueGreen,
    colors.lightBlue,
    colors.darkGrey,
    colors.mediumGrey,
    // colors.lightGrey,
    colors.electric,
    colors.pink,
    colors.red,
  ];

  let rainbowColors;

  const handleTimer = () => {
    rainbowColors = setInterval(handleRainbowColors, 250);
  };

  const handleRainbowColors = () => {
    const totalColors = colorPalate.length;

    manageRPSContext.setRobotColor(
      colorPalate[Math.floor(Math.random() * totalColors)]
    );
  };

  const stopTimer = () => {
    const robotChoice = [
      { name: 'Rock', avatar: <FaRegHandRock /> },
      { name: 'Paper', avatar: <FaRegHandPaper /> },
      { name: 'Scissors', avatar: <FaRegHandScissors /> },
    ];
    clearInterval(rainbowColors);
    manageRPSContext.setR2D2Choice(robotChoice[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    if (playerChoice) {
      handleTimer();
      setTimeout(() => {
        stopTimer();
      }, 2000);
    }
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
        <RPSAvatar
          name="Player"
          avatar={<GiGingerbreadMan size="10vh" />}
          RPS={playerChoice['avatar']}
        />
        <ScoreBoard />
        <div style={{ color: manageRPSContext.robotColor }}>
          <RPSAvatar
            name="R2-D2"
            avatar={<FaRobot size="10vh" />}
            RPS={R2D2Choice['avatar']}
          />
        </div>
      </div>
      <div>
        {game && <RPSComponent />}
        {!game && (
          <div style={styles.playButton}>
            <PlayButton
              title="Play"
              onClick={() => manageRPSContext.setGame(!manageRPSContext.game)}
            />
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
