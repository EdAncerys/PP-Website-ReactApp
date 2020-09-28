import React from 'react';
import colors from '../config/colors';
import TickTackToeBanner from './TickTackToeBanner/TickTackToeBanner';

export default function RightBanner({ props }) {
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
