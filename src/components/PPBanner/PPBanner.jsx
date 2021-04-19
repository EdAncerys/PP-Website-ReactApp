import React, { useContext } from 'react';
import { AppContext } from '../../App';
import ImageContainer from '../ImageContainer';
import LegoManImg from '../../img/Lego-Man.png';
import textDescription from '../../text/ProjectDescription';
import HeaderForBanner from '../HeaderForBanner';
import FooterForBanner from '../FooterForBanner';

import PagePalette from '../../config/PagePalette';

export default function TickTackToeBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const mediaQuery = manageAppContext.mediaQuery;

  const pageNumber = 2;

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
          width: mediaQuery ? '95vw' : 'auto',
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
            text={textDescription.PP}
            color={PagePalette[pageNumber].secondary}
          />
        </div>
        <FooterForBanner
          name="Personal Portfolio. See What I Can Do"
          type="Informational"
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
