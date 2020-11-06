import React from 'react';
import ImageContainer from '../ImageContainer';
import TickTackToeImg from '../../img/Tick-Tack-Toe.png';
import textDescription from '../../text/ProjectDescription';
import HeaderForBanner from '../HeaderForBanner';
import FooterForBanner from '../FooterForBanner';

import colors from '../../config/colors';
import PagePalette from '../../config/PagePalette';

export default function TickTackToeBanner({ props }) {
  return (
    <div className="bangers" style={styles.container}>
      <HeaderForBanner color={PagePalette[1].secondary} />
      <div style={styles.imageContainer}>
        <ImageContainer
          img={TickTackToeImg}
          altText="Tick-Tack-Toe"
          text={textDescription.TickTackToe}
          color={colors.black}
        />
      </div>
      <FooterForBanner color={PagePalette[3].secondary} page={3} />
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
};
