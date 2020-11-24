import React from 'react';
import IntroductionBanner from '../components/IntroductionBanner/IntroductionBanner';
import PPBanner from '../components/PPBanner/PPBanner';
import TickTackToeBanner from './TickTackToeBanner/TickTackToeBanner';
import RPSBanner from './RPSBanner/RPSBanner';
import Footer from './Footer';

export default function ContentBanner({ props }) {
  return (
    <div style={styles.container}>
      <IntroductionBanner />
      <PPBanner />
      <TickTackToeBanner />
      {/* <RPSBanner /> */}
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
