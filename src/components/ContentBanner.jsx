import React from 'react';
import IntroductionBanner from '../components/IntroductionBanner/IntroductionBanner';
import Footer from './Footer';
import TickTackToeBanner from './TickTackToeBanner/TickTackToeBanner';

export default function ContentBanner({ props }) {
  return (
    <div style={styles.container}>
      <IntroductionBanner />
      <TickTackToeBanner />
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    alignItems: 'stretch',
    userSelect: 'none',
    cursor: 'default',
    overflow: 'auto',
    height: '100%',
  },
};
