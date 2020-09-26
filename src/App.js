import React from 'react';
import './css/App.css';

import colors from './config/colors';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <div style={{ color: colors.yellow }}>App</div>
    </div>
  );
}

const styles = {
  container: {},
};
