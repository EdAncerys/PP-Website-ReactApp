import React from "react";
import IntroductionBanner from "../components/IntroductionBanner/IntroductionBanner";
import PPBanner from "../components/PPBanner/PPBanner";
import TickTackToeBanner from "./TickTackToeBanner/TickTackToeBanner";
import RPSBanner from "./RPSBanner/RPSBanner";
import Footer from "./Footer";

export default function ContentBanner({ props }) {
  return (
    <div className="bangers" style={styles.container}>
      <div className="features">
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
      </div>

      <div className="features">
        <div className="flex-container-100">
          <Footer />
        </div>
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
