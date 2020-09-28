import React from 'react';
import colors from '../config/colors';

export default function RightBanner({ props }) {
  return (
    <div style={styles.container}>
      <div>Right Banner</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    height: '100vh',
    minWidth: 300,
    userSelect: 'none',
    cursor: 'default',
    overflow: 'auto',
    backgroundColor: colors.red,
  },
};
