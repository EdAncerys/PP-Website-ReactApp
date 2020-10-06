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
    display: 'grid',
    gridTemplateRows: 'auto 80vh auto',
  },
};
