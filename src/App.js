import React, { useState, useEffect } from 'react';
import './css/App.css';
import ContentBanner from './components/ContentBanner.jsx';
import AboutBanner from './components/AboutBanner/AboutBanner';
import AboutMePage from './pages/AboutMePage';
import Footer from './components/Footer';
import Header from './components/Header';
import TickTackToePage from './pages/TickTackToePage';

import colors from './config/colors';

export const AppContext = React.createContext();

export default function App({ props }) {
  const [page, setPage] = useState(false);
  const [playerOneMove, setPlayerOneMove] = useState(true);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);

  const SESSION_STORAGE_KEY = 'EdAncerysPortfolioWebSite.App';

  const manageAppContext = {
    page: page,
    setPage: setPage,
    playerOneMove: playerOneMove,
    setPlayerOneMove: setPlayerOneMove,
    playerOne: playerOne,
    setPlayerOne: setPlayerOne,
    playerTwo: playerTwo,
    setPlayerTwo: setPlayerTwo,
  };

  useEffect(() => {
    console.log(playerOne, playerTwo, playerOneMove);
  }, [playerOne, playerTwo]);

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
      {page && <Header color={colors.white} />}
      {!page && (
        <div style={styles.container}>
          <AboutBanner />
          <ContentBanner />
        </div>
      )}
      <div style={{ height: page ? '90vh' : '', overflow: 'auto' }}>
        {page === 1 && <AboutMePage />}
        {page === 3 && <TickTackToePage />}
      </div>
      {page && <Footer />}
    </AppContext.Provider>
  );
}

const styles = {
  container: {
    display: 'grid',
    height: '100vh',
    gridTemplateColumns: '400px auto',
    overflow: 'auto',
  },
};
