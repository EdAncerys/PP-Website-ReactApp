import React from 'react';

import colors from '../../config/colors';

export default function AboutBanner({ props }) {
  return (
    <div className="teko" style={styles.container}>
      <div style={styles.about}>
        DESIGNER. THINKER. HUSBAND & FATHER.Almost before we knew it, we had
        left the
      </div>
      <div className="font">
        Currently designing @Uber. Formerly Experience Design Director @GoPro
        and Interactive Director @Focus Lab. Follow my work, words and photos
        below.
      </div>
      <div>Links to Websites/git linkedin etc</div>
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
  },
  about: {
    fontSize: 24,
    fontWeight: 600,
  },
};
