import React, { useState, useEffect } from "react";
import "./css/App.css";
import { useMediaQuery } from "../src/hooks/useMediaQuery.jsx";
import ContentBanner from "./components/ContentBanner.jsx";
import AboutBanner from "./components/AboutBanner/AboutBanner";
import AboutMePage from "./pages/AboutMePage";
import TickTackToePage from "./pages/TickTackToePage";
import PPPage from "./pages/PPPage";
import RPSPage from "./pages/RPSPage";

export const AppContext = React.createContext();

export default function App({ props }) {
  const [page, setPage] = useState(false);
  const SESSION_STORAGE_KEY = "EdAncerysPortfolioWebSite.App";

  const mediaQuery = !useMediaQuery("(min-width: 1000px)");

  const manageAppContext = {
    page,
    setPage,
    mediaQuery,
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

  const HandleHomePage = () => {
    return (
      <div
        style={{
          display: "grid",
          height: mediaQuery ? "" : "100vh",
          gridTemplateColumns: mediaQuery ? "" : "600px auto",
          overflow: "auto",
        }}
      >
        <AboutBanner />
        <ContentBanner />
      </div>
    );
  };

  return (
    <AppContext.Provider
      value={{
        manageAppContext,
      }}
    >
      <div>
        {!page && <HandleHomePage />}
        {page === 1 && <AboutMePage />}
        {page === 2 && <PPPage />}
        {page === 3 && <TickTackToePage />}
        {page === 4 && <RPSPage />}
      </div>
    </AppContext.Provider>
  );
}
