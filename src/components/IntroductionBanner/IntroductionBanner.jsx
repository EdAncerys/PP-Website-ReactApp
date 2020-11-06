import React from 'react';
import { GiDwarfFace } from 'react-icons/gi';
// import { FaPlay } from 'react-icons/fa';
// import GoToPageButton from '../GoToPageButton';
import ImageContainer from '../ImageContainer';
import LegoManImg from '../../img/Lego-Man.png';
import textDescription from '../../text/ProjectDescription';
import PagePalette from '../../config/PagePalette';

import colors from '../../config/colors';
import FooterForBanner from '../FooterForBanner';

export default function TickTackToeBanner({ props }) {
  return (
    <div className="bangers" style={styles.container}>
      <div style={styles.header}>
        <div>&#123;</div>
        <GiDwarfFace />:<div>001</div>
        <div>&#125;</div>
      </div>
      <div style={styles.imageContainer}>
        <ImageContainer
          img={LegoManImg}
          altText="Tick-Tack-Toe"
          text={textDescription.AboutInfoBanner}
          color={colors.black}
        />
      </div>
      {/* <div style={styles.footer}>
        <div style={styles.footerText}>
          <div>&#123;</div>
          <div>Name : About Me ,</div>
          <div>Type : Informational</div>
          <div>&#125;</div>
        </div>
        <GoToPageButton icon={<FaPlay />} hoverColor={colors.white} page={1} />
      </div> */}
      <FooterForBanner />
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
    backgroundColor: PagePalette[1].primary,
    color: PagePalette[1].secondary,
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
  // footer: {
  //   display: 'grid',
  //   gridTemplateColumns: '95% auto',
  //   alignItems: 'center',
  //   fontSize: 18,
  // },
  footerText: {
    display: 'grid',
  },
};
