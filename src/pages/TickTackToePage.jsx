import React, { useState } from 'react';
import FamilyGuyCharacters from '../components/TickTackToeBanner/FamilyGuyCharacters';

export const TickTackToeContext = React.createContext();

export default function TickTackToePage({ props }) {
  const [characters, setCharacters] = useState(['']);

  const manageTickTackToeContext = { test: 'TickTackToe test context' };

  return (
    <TickTackToeContext.Provider
      value={{
        manageTickTackToeContext,
      }}
    >
      <div style={styles.container}>
        <div style={styles.content}>
          <FamilyGuyCharacters />
        </div>
      </div>
    </TickTackToeContext.Provider>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    userSelect: 'none',
    cursor: 'default',
  },
  content: {
    display: 'grid',
    width: 600,
    marginTop: 100,
    marginBottom: 100,
    gridGap: 10,
    textAlign: 'justify',
  },
};
