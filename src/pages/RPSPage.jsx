import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import colors from '../config/colors';
import WelcomeBanner from '../components/RPSBanner/WelcomeBanner';

export const RPSContext = React.createContext();

export default function RPSPage({ props }) {
  const [game, setGame] = useState(false);

  const manageRPSContext = {
    game: game,
    setGame: setGame,
  };

  return (
    <RPSContext.Provider
      value={{
        manageRPSContext,
      }}
    >
      <div style={styles.container}>
        <div>
          <Header color={colors.white} />
        </div>
        <div className="teko" style={styles.content}>
          <div style={styles.wrapper}>
            <WelcomeBanner />
          </div>
        </div>
        <div style={styles.footer}>
          <Footer />
        </div>
      </div>
    </RPSContext.Provider>
  );
}

const styles = {
  container: {
    display: 'grid',
    width: '100vw',
    height: '100vh',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',

    userSelect: 'none',
    cursor: 'default',
  },
  content: {
    display: 'grid',
    justifyContent: 'center',
    gridColumn: 'span 6',
    marginBottom: 50,
    gridRow: '1 / 6',
    marginTop: '10vh',
    textAlign: 'justify',
  },
  wrapper: {
    // width: 600,
    maxWidth: '95vw',
  },
  title: {
    fontSize: 30,
    marginTop: 30,
  },
  footer: {
    gridRow: '6 / 6',
    gridColumn: 'span 6',
  },
};
