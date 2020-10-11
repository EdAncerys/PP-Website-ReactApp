import React from 'react';
import { GiDwarfFace } from 'react-icons/gi';
import { FaPlay } from 'react-icons/fa';
import GoToPageButton from '../GoToPageButton';
import ImageContainer from '../ImageContainer';
import TickTackToeImg from '../../img/Tick-Tack-Toe.png';
import textDescription from '../../text/ProjectDescription';

import colors from '../../config/colors';
import PagePalette from '../../config/PagePalette';

export default function TickTackToeBanner({ props }) {
  return (
    <div className="bangers" style={styles.container}>
      <div style={styles.header}>
        <div>&#123;</div>
        <GiDwarfFace />:<div>003</div>
        <div>&#125;</div>
      </div>
      <div style={styles.imageContainer}>
        <ImageContainer
          img={TickTackToeImg}
          altText="Tick-Tack-Toe"
          text={textDescription.TickTackToe}
          color={colors.black}
        />
      </div>
      <div style={styles.footer}>
        <div style={styles.footerText}>
          <div>&#123;</div>
          <div>Name : Tic-tac-toe ,</div>
          <div>Type : Game</div>
          <div>&#125;</div>
        </div>
        <GoToPageButton icon={<FaPlay />} hoverColor={colors.white} page={3} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateRows: '50px auto 100px',
    paddingLeft: 50,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: PagePalette[3].primary,
    color: PagePalette[3].secondary,
  },
  imageContainer: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'grid',
    gridTemplateColumns: '10px 20px 10px 25px 10px',
    alignItems: 'center',
    fontSize: 12,
  },
  footer: {
    display: 'grid',
    gridTemplateColumns: '95% auto',
    alignItems: 'center',
    fontSize: 18,
  },
  footerText: {
    display: 'grid',
  },
};
