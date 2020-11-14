import React, { useState, useEffect } from 'react';
import './css/App.css';
import { useMediaQuery } from '../src/hooks/useMediaQuery.jsx';
import ContentBanner from './components/ContentBanner.jsx';
import AboutBanner from './components/AboutBanner/AboutBanner';
import AboutMePage from './pages/AboutMePage';
import Footer from './components/Footer';
import Header from './components/Header';
import TickTackToePage from './pages/TickTackToePage';
import PPPage from './pages/PPPage';
import RPSPage from './pages/RPSPage';

import colors from './config/colors';

export const AppContext = React.createContext();

export default function App({ props }) {
  const [page, setPage] = useState(false);
  const SESSION_STORAGE_KEY = 'EdAncerysPortfolioWebSite.App';

  const mediaQuery = !useMediaQuery('(min-width: 800px)');

  const manageAppContext = {
    page: page,
    setPage: setPage,
    mediaQuery: mediaQuery,
  };

  useEffect(() => {
    const data = sessionStorage.getItem(SESSION_STORAGE_KEY);
    const userSession = JSON.parse(data);
    if (userSession) setPage(userSession.page);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify(manageAppContext)
    );
  }, [manageAppContext]);

  return (
    <AppContext.Provider
      value={{
        manageAppContext,
      }}
    >
      {!page && (
        <div
          style={{
            display: 'grid',
            height: mediaQuery ? '' : '100vh',
            gridTemplateColumns: mediaQuery ? '' : '400px auto',
            overflow: 'auto',
          }}
        >
          <AboutBanner />
          <ContentBanner />
        </div>
      )}
      <div style={{ overflow: 'auto' }}>
        {page === 1 && <AboutMePage />}
        {page === 2 && <PPPage />}
        {page === 3 && <TickTackToePage />}
        {page === 4 && <RPSPage />}
      </div>
    </AppContext.Provider>
  );
}
