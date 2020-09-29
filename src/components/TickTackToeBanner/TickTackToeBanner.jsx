import React from 'react';

import colors from '../../config/colors';

export default function TickTackToeBanner({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>TickTackToe</div>
      <div>Image /Content</div>
      <div style={styles.footer}>TickTackToe</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateRows: '200 auto 500',
    // alignItems: 'center',
    paddingLeft: 20,
    paddingTop: 20,
    height: 400,
    backgroundColor: colors.electric,
  },
  header: {
    fontSize: 12,
    color: colors.white,
  },
};
