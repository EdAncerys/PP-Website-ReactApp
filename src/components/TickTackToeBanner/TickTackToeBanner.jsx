import React from 'react';
import { GiDwarfFace } from 'react-icons/gi';
import { FaPlay } from 'react-icons/fa';

import colors from '../../config/colors';
import GoToPageButton from '../GoToPageButton';
import ImageContainer from '../ImageContainer';

export default function TickTackToeBanner({ props }) {
  return (
    <div className="bangers" style={styles.container}>
      <div style={styles.header}>
        <GiDwarfFace />
        Tic-tac-toe
      </div>
      <div style={styles.image}>
        <ImageContainer>Image /Content</ImageContainer>
      </div>
      <div style={styles.footer}>
        Tic-tac-toe game
        <GoToPageButton icon={<FaPlay />} />
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
    backgroundColor: colors.blue,
    color: colors.white,
  },
  image: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  header: {
    display: 'grid',
    gridTemplateColumns: '15px auto',
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
