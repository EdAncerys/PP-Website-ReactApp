import React from 'react';
import ImageContainer from '../ImageContainer';
import Coding from '../../img/PPPhoto.jpg';
import textDescription from '../../text/ProjectDescription';
import PagePalette from '../../config/PagePalette';
import HeaderForBanner from '../HeaderForBanner';

import colors from '../../config/colors';
import FooterForBanner from '../FooterForBanner';

export default function TickTackToeBanner({ props }) {
  return (
    <div className="bangers" style={styles.container}>
      <div style={styles.wrapper}>
        <HeaderForBanner color={PagePalette[2].secondary} />
        <div style={styles.imageContainer}>
          <ImageContainer
            img={Coding}
            altText="Tick-Tack-Toe"
            text={textDescription.AboutInfoBanner}
            color={PagePalette[2].secondary}
          />
        </div>
        <FooterForBanner
          name="See What I Can Do"
          type="Informational"
          color={PagePalette[2].secondary}
          page={2}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    backgroundColor: PagePalette[2].primary,
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
