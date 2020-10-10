import React, { useState } from 'react';
import './css/App.css';
import ContentBanner from './components/ContentBanner.jsx';
import AboutBanner from './components/AboutBanner/AboutBanner';
import PageOne from './pages/PageOne';
import Footer from './components/Footer';
import Header from './components/Header';

import colors from './config/colors';

export const AppContext = React.createContext();

export default function App({ props }) {
  const [page, setPage] = useState(1);

  return (
    <AppContext.Provider
      value={{
        setPage,
      }}
    >
      {page && <Header color={colors.white} />}
      {!page && (
        <div style={styles.container}>
          <AboutBanner />
          <ContentBanner />
        </div>
      )}
      {page === 1 && <PageOne />}
      {page && <Footer />}
    </AppContext.Provider>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '400px auto',
  },
};
