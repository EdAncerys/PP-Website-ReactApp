import React, { useContext } from 'react';
import { AppContext } from '../../App';

import PagePalette from '../../config/PagePalette';

export default function WelcomeBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);

  return (
    <div style={{ color: PagePalette[manageAppContext.page].secondary }}>
      <div style={styles.title}>Hi and Welcome To The RPS Game</div>
    </div>
  );
}

const styles = {
  title: {
    fontSize: 30,
  },
};
