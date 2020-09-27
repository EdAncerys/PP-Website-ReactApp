import React from 'react';
import SocialBanner from './SocialBanner';

import colors from '../../config/colors';

export default function AboutBanner({ props }) {
  return (
    <div className="teko" style={styles.container}>
      <div style={styles.about}>
        ENGINEER. <br />
        THINKER. <br />
        DEVELOPER <br />
        & EXPLORER. <br />
      </div>
      <div style={styles.textSlide}>
        Currently self employed @TC&D. Formerly Experience Manager with some of
        the well known retail brands & CAD technician. Find out more about me,
        follow my work, words and photos below.
      </div>
      <SocialBanner />
      <div>Btn</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    alignContent: 'center',
    justifyItems: 'center',
    height: '100vh',
    backgroundColor: colors.yellow,
    padding: 50,
  },
  about: {
    fontSize: 40,
    fontWeight: 600,
    lineHeight: 1.2,
  },
  textSlide: {
    maxWidth: 300,
    fontSize: 20,
  },
};
