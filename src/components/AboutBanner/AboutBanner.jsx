import React from 'react';
import colors from '../../config/colors';

export default function AboutBanner({ props }) {
  return (
    <div style={styles.container}>
      <div>DESIGNER. THINKER. HUSBAND & FATHER.</div>
      <div>
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
};
