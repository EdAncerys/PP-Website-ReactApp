import React, { useContext } from 'react';
import { AppContext } from '../../App';
import ImageContainer from '../ImageContainer';
import TickTackToeImg from '../../img/Tick-Tack-Toe.png';
import textDescription from '../../text/ProjectDescription';
import HeaderForBanner from '../HeaderForBanner';
import FooterForBanner from '../FooterForBanner';

import PagePalette from '../../config/PagePalette';

export default function TickTackToeBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const mediaQuery = manageAppContext.mediaQuery;

  return (
    <div className="bangers" style={styles.container}>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '50px auto 100px',
          height: 550,
          width: mediaQuery ? '95vw' : 600,
        }}
      >
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
    width: '100%',
  },
  imageContainer: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
