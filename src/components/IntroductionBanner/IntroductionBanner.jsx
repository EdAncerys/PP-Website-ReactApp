import React from 'react';
import ImageContainer from '../ImageContainer';
import LegoManImg from '../../img/Lego-Man.png';
import textDescription from '../../text/ProjectDescription';
import FooterForBanner from '../FooterForBanner';

import colors from '../../config/colors';
import PagePalette from '../../config/PagePalette';
import HeaderForBanner from '../HeaderForBanner';

export default function TickTackToeBanner({ props }) {
  return (
    <div className="bangers" style={styles.container}>
      <div style={styles.wrapper}>
        <HeaderForBanner color={PagePalette[1].secondary} />
        <div style={styles.imageContainer}>
          <ImageContainer
            img={LegoManImg}
            altText="Tick-Tack-Toe"
            text={textDescription.AboutInfoBanner}
            color={colors.black}
          />
        </div>
        <FooterForBanner
          name="About"
          type="Informational"
          color={PagePalette[1].secondary}
          page={1}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: PagePalette[1].primary,
  },
  wrapper: {
    display: 'grid',
    gridTemplateRows: '50px auto 100px',
    paddingLeft: 50,
    paddingRight: 20,
    paddingTop: 20,
    maxWidth: 600,
    height: 450,
  },
  imageContainer: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
