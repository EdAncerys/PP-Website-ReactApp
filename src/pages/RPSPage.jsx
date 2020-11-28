import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeBanner from '../components/RPSBanner/WelcomeBanner';

import colors from '../config/colors';
import PagePalette from '../config/PagePalette';

export const RPSContext = React.createContext();

export default function RPSPage({ props }) {
  const { manageAppContext } = useContext(AppContext);

  const [game, setGame] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [robotScore, setRobotScore] = useState(0);
  const [tiesScore, setTiesScore] = useState(0);
  const [round, setRound] = useState(0);
  const [playerChoice, setPlayerChoice] = useState();
  const [R2D2Choice, setR2D2Choice] = useState();
  const [robotColor, setRobotColor] = useState(
    PagePalette[manageAppContext.page].secondary
  );

  const SESSION_STORAGE_KEY = 'EdAncerysPortfolioWebSiteRPS.App';

  const manageRPSContext = {
    game: game,
    setGame: setGame,
    playerScore: playerScore,
    setPlayerScore: setPlayerScore,
    robotScore: robotScore,
    setRobotScore: setRobotScore,
    tiesScore: tiesScore,
    setTiesScore: setTiesScore,
    round: round,
    setRound: setRound,
    playerChoice: playerChoice,
    setPlayerChoice: setPlayerChoice,
    R2D2Choice: R2D2Choice,
    setR2D2Choice: setR2D2Choice,
    robotColor: robotColor,
    setRobotColor: setRobotColor,
  };

  useEffect(() => {
    console.log(playerChoice, R2D2Choice);
  }, [playerChoice, R2D2Choice]);

  useEffect(() => {
    const data = sessionStorage.getItem(SESSION_STORAGE_KEY);
    const userSession = JSON.parse(data);
    if (userSession) {
      setGame(userSession.game);
      setPlayerScore(userSession.playerScore);
      setRobotScore(userSession.robotScore);
      setTiesScore(userSession.tiesScore);
      setRound(userSession.round);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify(manageRPSContext)
    );
  }, [manageRPSContext]);

  const handleGameWinner = () => {
    console.log('winner');
  };

  useEffect(() => {
    handleGameWinner();
  }, [R2D2Choice]);

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
