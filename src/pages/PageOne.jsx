import React from 'react';
import Text from '../text/ProjectDescription';
import Footer from '../components/Footer';

import colors from '../config/colors';

export default function PageOne({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.content}>{Text.AboutInfo}</div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateRows: 'auto auto auto',
  },
  wrapper: {
    display: 'grid',
    justifyContent: 'center',
  },
  content: {
    display: 'grid',
    height: '95vh',
    width: 600,
    paddingTop: 50,
    textAlign: 'justify',
  },
};
