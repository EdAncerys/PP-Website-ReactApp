import React from 'react';
import App, { AppContext } from '../App';

const TickTackToeContext = React.Component();

export default function TickTackToePage({ props }) {
  const manageTickTackToeContext = {};
  return (
    <AppContext.Provider
      value={{
        manageTickTackToeContext,
      }}
    >
      <div style={styles.container}>
        <div style={styles.content}>
          <div>TicTackToe Page</div>
        </div>
      </div>
    </AppContext.Provider>
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
