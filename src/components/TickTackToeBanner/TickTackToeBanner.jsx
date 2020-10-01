import React from 'react';
import { GiDwarfFace } from 'react-icons/gi';
import { FaPlay } from 'react-icons/fa';
import GoToPageButton from '../GoToPageButton';
import ImageContainer from '../ImageContainer';
import TickTackToeImg from '../../img/Tick-Tack-Toe.png';

import colors from '../../config/colors';

export default function TickTackToeBanner({ props }) {
  return (
    <div className="bangers" style={styles.container}>
      <div style={styles.header}>
        <GiDwarfFace />
        Tic-tac-toe
      </div>
      <div style={styles.image}>
        <ImageContainer>
          <img src={TickTackToeImg} />
        </ImageContainer>
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
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
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
