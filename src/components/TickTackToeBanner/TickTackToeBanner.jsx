import React from 'react';
import ImageContainer from '../ImageContainer';
import TickTackToeImg from '../../img/Tick-Tack-Toe.png';
import textDescription from '../../text/ProjectDescription';
import HeaderForBanner from '../HeaderForBanner';
import FooterForBanner from '../FooterForBanner';

import PagePalette from '../../config/PagePalette';

export default function TickTackToeBanner({ props }) {
  return (
    <div className="bangers" style={styles.container}>
      <div style={styles.wrapper}>
        <HeaderForBanner color={PagePalette[3].secondary} />
        <div style={styles.imageContainer}>
          <ImageContainer
            img={TickTackToeImg}
            altText="Tick-Tack-Toe"
            text={textDescription.TickTackToe}
            color={PagePalette[3].secondary}
          />
        </div>
        <FooterForBanner
          name="Game"
          type="Board Game: Tic Tack Toe"
          color={PagePalette[3].secondary}
          page={3}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    backgroundColor: PagePalette[3].primary,
  },
  wrapper: {
    display: 'grid',
    gridTemplateRows: '50px auto 100px',
    paddingLeft: 50,
    paddingRight: 20,
    paddingTop: 20,
    height: 550,
    width: 600,
  },
  imageContainer: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
