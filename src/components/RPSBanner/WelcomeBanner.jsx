import React, { useContext } from 'react';
import { AppContext } from '../../App';

import { GiGingerbreadMan } from 'react-icons/gi';
import { FaRobot } from 'react-icons/fa';

import PagePalette from '../../config/PagePalette';

export default function WelcomeBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);

  return (
    <div style={{ color: PagePalette[manageAppContext.page].secondary }}>
      <div style={styles.title}>Hi and Welcome To The RPS Game</div>
      <div style={styles.content}>
        <GiGingerbreadMan size="10vh" />
        <div style={styles.vs}>vs</div>
        <FaRobot size="10vh" />
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
    gridGap: 30,
    gridTemplateColumns: 'auto auto auto',
    marginTop: '2vh',
  },
  vs: {
    fontSize: '5vh',
  },
};
