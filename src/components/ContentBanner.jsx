import React from 'react';
import IntroductionBanner from '../components/IntroductionBanner/IntroductionBanner';
import TickTackToeBanner from './TickTackToeBanner/TickTackToeBanner';

import colors from '../config/colors';

export default function ContentBanner({ props }) {
  return (
    <div style={styles.container}>
      <IntroductionBanner />
      <TickTackToeBanner />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    userSelect: 'none',
    cursor: 'default',
    overflow: 'auto',
  },
};
