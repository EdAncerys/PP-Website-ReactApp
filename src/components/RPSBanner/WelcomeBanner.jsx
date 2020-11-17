import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { RPSContext } from '../../pages/RPSPage';

import { GiGingerbreadMan } from 'react-icons/gi';
import { FaRobot } from 'react-icons/fa';
import { BsPlayFill } from 'react-icons/bs';

import PagePalette from '../../config/PagePalette';
import RPSPlayer from './RPSPlayer';

export default function WelcomeBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const { manageRPSContext } = useContext(RPSContext);

  const game = manageRPSContext.game;

  const handlePlayClick = () => {
    manageRPSContext.setGame(!game);
  };

  return (
    <div style={{ color: PagePalette[manageAppContext.page].secondary }}>
      <div style={styles.title}>
        {!game && <div>Hi and Welcome To The RPS Game</div>}
        {game && <div>Rock Paper Scissors</div>}
      </div>
      <div style={styles.content}>
        <RPSPlayer name="Player" avatar={<GiGingerbreadMan size="10vh" />} />
        <div style={styles.vs}>vs</div>
        <RPSPlayer name="Ralf The Robot" avatar={<FaRobot size="10vh" />} />
      </div>
      <div style={styles.footer} onClick={() => handlePlayClick()}>
        <div style={styles.playBtn}>Play</div>
        <BsPlayFill size="5vh" />
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
  vs: {
    fontSize: '5vh',
  },
  playBtn: {
    fontSize: '3vh',
  },
  footer: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridTemplateColumns: 'auto auto auto',
    cursor: 'pointer',
  },
};
