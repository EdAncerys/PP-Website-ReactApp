import React from 'react';
import Footer from '../components/Footer';

import colors from '../config/colors';

export default function PageOne({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.content}>page one</div>
      <Footer color={colors.cucumber} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gridTemplateRows: 'auto auto auto',
  },
  content: {
    height: 400,
    flex: 1,
    backgroundColor: 'tomato',
  },
};
