import React, { useContext } from 'react';
import { AppContext } from '../../App';
import ImageContainer from '../ImageContainer';
import LegoManImg from '../../img/Lego-Man.png';
import textDescription from '../../text/ProjectDescription';
import FooterForBanner from '../FooterForBanner';
import HeaderForBanner from '../HeaderForBanner';

import PagePalette from '../../config/PagePalette';

export default function TickTackToeBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const mediaQuery = manageAppContext.mediaQuery;

  const pageNumber = 1;

  return (
    <div
    style={{
      backgroundColor: PagePalette[pageNumber].primary
   }}
    >
  <div
    className="features"
    >
    <div
    className="flex-container-80"
    >
      <div
          className="banner"
          style={{
             backgroundColor: PagePalette[pageNumber].primary
          }}
      >
        <HeaderForBanner
          color={PagePalette[pageNumber].secondary}
          page={pageNumber}
        />
        <div style={styles.imageContainer}>
          <ImageContainer
            img={LegoManImg}
            altText="Personal-Portfolio"
            text={textDescription.AboutInfoBanner}
            color={PagePalette[pageNumber].secondary}
          />
        </div>
        <FooterForBanner
          name="About"
          type="Introduction"
          color={PagePalette[pageNumber].secondary}
          page={pageNumber}
        />
      </div>
    </div>
    </div> 
    </div> 
  );
}

const styles = {
  imageContainer: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
