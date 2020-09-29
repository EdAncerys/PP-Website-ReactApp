import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';

import colors from '../../config/colors';

export default function TickTackToeBanner({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <AiOutlineSetting />
        Tic-tac-toe
      </div>
      <div>Image /Content</div>
      <div style={styles.footer}>
        Tic-tac-toe game
        <FaPlay />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateRows: '50px auto 100px',
    // alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 20,
    paddingTop: 20,
    height: 400,
    backgroundColor: colors.electric,
    color: colors.white,
  },
  header: {
    display: 'grid',
    gridTemplateColumns: '20px auto',
    alignItems: 'center',
    fontSize: 12,
  },
  footer: {
    display: 'grid',
    gridTemplateColumns: '95% auto',
    alignItems: 'center',
    fontSize: 18,
  },
};
