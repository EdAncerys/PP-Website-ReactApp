import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Brian from '../img/TickTackToeImg/Brian.png';

import colors from '../config/colors';

export const RPSContext = React.createContext();

export default function RPSPage({ props }) {
  return (
    <RPSContext.Provider
      value={{
        RPSContext,
      }}
    >
      <div style={styles.container}>
        <div>
          <Header color={colors.white} />
        </div>
        <div className="family" style={styles.content}>
          RPS
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
    gridColumn: 'span 6',
    gridRow: '1 / 4',
    marginTop: '12vh',
    gridGap: '1vh',
    textAlign: 'justify',
  },
  footer: {
    gridRow: '6 / 6',
    gridColumn: 'span 6',
  },
};
