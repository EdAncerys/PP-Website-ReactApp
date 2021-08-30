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
  console.log(SLIDE_OVERLAP);
  const cardStyling = {
    marginTop: `-${SLIDE_OVERLAP}px`,
  };
  const cardStylingSlideOne = {
    marginTop: `${SLIDE_OVERLAP * 1.5}px`,
  };

  return (
    <div className="bangers" style={styles.container}>
      <div className="snap-container">
        {mediaQuery && (
          <section style={cardStyling}>
            <AboutBanner />
          </section>
        )}
        <section style={mediaQuery ? cardStyling : cardStylingSlideOne}>
          <IntroductionBanner />
        </section>
        <section style={cardStyling}>
          <PPBanner />
        </section>
        <section style={cardStyling}>
          <TickTackToeBanner />
        </section>
        <section style={cardStyling}>
          <RPSBanner />
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
  },
};
