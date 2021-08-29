import * as React from "react";
import { AppContext } from "../App";

import IntroductionBanner from "../components/IntroductionBanner/IntroductionBanner";
import PPBanner from "../components/PPBanner/PPBanner";
import TickTackToeBanner from "./TickTackToeBanner/TickTackToeBanner";
import RPSBanner from "./RPSBanner/RPSBanner";
import AboutBanner from "./AboutBanner/AboutBanner";

export default function ContentBanner({}) {
  const { manageAppContext } = React.useContext(AppContext);
  const mediaQuery = manageAppContext.mediaQuery;
  const SLIDE_OVERLAP = manageAppContext.SLIDE_OVERLAP;

  const cardStyling = {
    marginTop: -SLIDE_OVERLAP,
  };
  return (
    <div className="bangers" style={styles.container}>
      {/* <div className="features">
        <div className="flex-container-100">
          <IntroductionBanner />
        </div>
      </div>

      <div className="features">
        <div className="flex-container-100">
          <PPBanner />
        </div>
      </div>

      <div className="features">
        <div className="flex-container-100">
          <TickTackToeBanner />
        </div>
      </div>

      <div className="features">
        <div className="flex-container-100">
          <RPSBanner />
        </div>
      </div> */}
      <div className="snap-container">
        {mediaQuery && (
          <section style={cardStyling}>
            <AboutBanner />
          </section>
        )}
        <section style={cardStyling}>
          <IntroductionBanner />
        </section>
        <section style={cardStyling}>
          <PPBanner />
        </section>
        <section style={cardStyling}>
          <TickTackToeBanner />
        </section>
        <section style={cardStyling}>
          <TickTackToeBanner />
        </section>
      </div>
    </div>
  );
}

const styles = {
  container: {
    userSelect: "none",
    cursor: "default",
    overflow: "auto",
    height: "100%",
  },
};
