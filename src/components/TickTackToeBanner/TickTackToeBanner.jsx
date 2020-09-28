import React from 'react';
import colors from '../../config/colors';

export default function TickTackToeBanner({ props }) {
  return (
    <div style={styles.container}>
      <div>TickTackToe</div>
    </div>
  );
}

const styles = {
  container: {
    height: 400,
    backgroundColor: colors.electric,
  },
};
