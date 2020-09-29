import React from 'react';
import TickTackToeBanner from './TickTackToeBanner/TickTackToeBanner';

import colors from '../config/colors';

export default function ContentBanner({ props }) {
  return (
    <div style={styles.container}>
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
