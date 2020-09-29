import React from 'react';
import './css/App.css';
import ContentBanner from './components/ContentBanner.jsx';

import colors from './config/colors';

import AboutBanner from './components/AboutBanner/AboutBanner';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <div>
        <AboutBanner />
      </div>
      <div>
        <ContentBanner />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '400px auto',
  },
};
