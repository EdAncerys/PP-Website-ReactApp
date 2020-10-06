import React, { useState } from 'react';
import './css/App.css';
import ContentBanner from './components/ContentBanner.jsx';
import AboutBanner from './components/AboutBanner/AboutBanner';

export const AppContext = React.createContext();

export default function App({ props }) {
  const [page, setPage] = useState(false);

  return (
    <AppContext.Provider
      value={{
        page,
      }}
    >
      <div style={styles.container}>
        {!page && (
          <div>
            <AboutBanner />
          </div>
        )}
        {!page && (
          <div>
            <ContentBanner />
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '400px auto',
  },
};
