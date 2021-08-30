import React from "react";
import SocialBanner from "./SocialBanner";
import MailMeButton from "./MailMeButton";

import colors from "../../config/colors";

export default function AboutBanner({ mediaQuery }) {
  return (
    <div
      className="teko"
      style={{
        display: "grid",
        justifyContent: mediaQuery === false ? "start" : "center",
        alignContent: "center",
        backgroundColor: colors.yellow,
        padding: 50,
        userSelect: "none",
        cursor: "default",
        width: "100%",
      }}
    >
      <div>
        <svg>
          <text textAnchor="start" x="0" y="30">
            ENGINEER.
          </text>
          <text textAnchor="start" x="40" y="60">
            THINKER.
          </text>
          <text textAnchor="start" x="20" y="90">
            DEVELOPER.
          </text>
          <text textAnchor="start" x="30" y="120">
            & EXPLORER.
          </text>
        </svg>
      </div>
      <div style={styles.aboutText}>
        Software developer. Formerly a Manager for some of the well known retail
        brands & architect at engineering & architectural companies. Find out
        more about me, follow my work, words & photos below.
      </div>
      <SocialBanner />
      <MailMeButton title="Say Hello!" />
    </div>
  );
}

const styles = {
  aboutText: {
    maxWidth: 300,
    fontSize: 20,
  },
};
