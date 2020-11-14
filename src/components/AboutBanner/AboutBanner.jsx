import React from 'react';
import SocialBanner from './SocialBanner';
import MailMeButton from './MailMeButton';

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
