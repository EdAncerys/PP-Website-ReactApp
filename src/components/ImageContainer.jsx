import React from 'react';

import colors from '../config/colors';

export default function ImageContainer({ children }) {
  return <div style={styles.container}>{children}</div>;
}

const styles = {
  container: {
    display: 'grid',
    alignItems: 'center',
    textAlign: 'center',
    height: 200,
    width: 200,
    border: `1px solid ${colors.white}`,
    borderRadius: 20,
  },
};
