import React, { useContext } from 'react';
import { AppContext } from '../../App';
import ImageContainer from '../ImageContainer';
import Coding from '../../img/PPPhoto.jpg';
import textDescription from '../../text/ProjectDescription';
import HeaderForBanner from '../HeaderForBanner';
import FooterForBanner from '../FooterForBanner';

import PagePalette from '../../config/PagePalette';

export default function TickTackToeBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const mediaQuery = manageAppContext.mediaQuery;

  const pageNumber = 4;

  return (
    <div
      className="bangers"
      style={{
        ...styles.container,
        ...{ backgroundColor: PagePalette[pageNumber].primary },
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '50px auto 100px',
          height: 550,
          width: mediaQuery ? '95vw' : 600,
        }}
      >
        <HeaderForBanner
          color={PagePalette[pageNumber].secondary}
          page={pageNumber}
        />
        <div style={styles.imageContainer}>
          <ImageContainer
            img={Coding}
            altText="Tick-Tack-Toe"
            text={textDescription.AboutInfoBanner}
            color={PagePalette[pageNumber].secondary}
          />
        </div>
        <FooterForBanner
          name="Board Game: RPS"
          type="Game"
          color={PagePalette[pageNumber].secondary}
          page={pageNumber}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    width: '100%',
  },
  imageContainer: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
