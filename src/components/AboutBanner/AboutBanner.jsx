import React, { useContext } from 'react';
import SocialBanner from './SocialBanner';
import { AppContext } from '../../App';

import colors from '../../config/colors';
import MailMeButton from './MailMeButton';

export default function AboutBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const mediaQuery = manageAppContext.mediaQuery;

  return (
    <div className="teko" style={styles.container}>
      <div style={styles.about}>
        ENGINEER. <br />
        THINKER. <br />
        DEVELOPER <br />
        & EXPLORER. <br />
      </div>
      <div style={styles.textSlide}>
        Currently, self-employed @TC&D. Formerly Experience Manager for some of
        the well known retail brands & as architect at engineering &
        architectural companies. Find out more about me, follow my work, words &
        photos below.
      </div>
      <SocialBanner />
      <MailMeButton text="Say Hello!" />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    alignContent: 'center',
    backgroundColor: colors.yellow,
    padding: 50,
    userSelect: 'none',
    cursor: 'default',
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
