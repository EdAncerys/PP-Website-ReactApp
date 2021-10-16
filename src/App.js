import React, { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./css/App.css";
import ContentBanner from "./components/ContentBanner.jsx";
import AboutBanner from "./components/AboutBanner/AboutBanner";
import AboutMePage from "./pages/AboutMePage";
import TickTackToePage from "./pages/TickTackToePage";
import PPPage from "./pages/PPPage";
import RPSPage from "./pages/RPSPage";
import BackgroundImage from "../src/img/bg.jpg";

export const AppContext = React.createContext();

export default function App({}) {
  const [page, setPage] = useState(false);
  const SESSION_STORAGE_KEY = "EdAncerysPortfolioWebSite.App";
  const mediaQuery = useMediaQuery("(max-width: 1000px)");
  const SLIDE_OVERLAP = 80;

  const manageAppContext = {
    page,
    setPage,
    mediaQuery,
    SLIDE_OVERLAP,
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
          gridTemplateColumns: mediaQuery ? "" : "500px auto",
          overflow: "auto",
        }}
      >
        {!mediaQuery && <AboutBanner mediaQuery={mediaQuery} />}
        <ContentBanner mediaQuery={mediaQuery} SLIDE_OVERLAP={SLIDE_OVERLAP} />
      </div>
    );
  };

  const PlaceHolder = () => {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          height: "100vh",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{ color: "#FF9292", fontSize: "8rem", lineHeight: "6.5rem" }}
            className="teko"
          >
            Coming Soon
          </h1>
          <h1
            style={{ color: "#FF9292", fontSize: "2rem" }}
            className="OrelegaOne"
          >
            ...We still working on it...
          </h1>
        </div>
      </div>
    );
  };

  return (
    <AppContext.Provider
      value={{
        manageAppContext,
      }}
    >
      <PlaceHolder />
      {/* <div>
        {!page && <HandleHomePage />}
        {page === 1 && <AboutMePage />}
        {page === 2 && <PPPage />}
        {page === 3 && <TickTackToePage />}
        {page === 4 && <RPSPage />}
      </div> */}
    </AppContext.Provider>
  );
}
