import React, { useState, useEffect } from 'react';
import './css/App.css';
import ContentBanner from './components/ContentBanner.jsx';
import AboutBanner from './components/AboutBanner/AboutBanner';
import PageOne from './pages/PageOne';
import Footer from './components/Footer';
import Header from './components/Header';

import colors from './config/colors';

export const AppContext = React.createContext();

export default function App({ props }) {
  const [page, setPage] = useState(false);

  const SESSION_STORAGE_KEY = 'EdAncerysPortfolioWebSite.App';

  const manageContextState = {
    page: page,
    setPage: setPage,
  };

  useEffect(() => {
    // if (userSession) console.log(userSession);
    // setPage(sessionStorage.page);

    // const data = sessionStorage.getItem(SESSION_STORAGE_KEY);
    // const userSession = JSON.parse(data);
    // // setPage(userSession.page);
    // console.log('local storage', userSession);

    sessionStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify(manageContextState)
    );
  }, [manageContextState]);

  // useEffect(() => {
  //   const data = sessionStorage.getItem(SESSION_STORAGE_KEY);
  //   const userSession = JSON.parse(data);
  //   setPage(userSession.page);
  //   console.log('local storage', userSession);
  // }, [page]);

  return (
    <AppContext.Provider
      value={{
        manageContextState,
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
