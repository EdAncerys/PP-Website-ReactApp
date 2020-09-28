import React from 'react';
import './css/App.css';
import RightBanner from './components/RightBanner.jsx';

import colors from './config/colors';

import AboutBanner from './components/AboutBanner/AboutBanner';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <div>
        <AboutBanner />
      </div>
      <div>
        <RightBanner />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '40vw auto',
  },
};
