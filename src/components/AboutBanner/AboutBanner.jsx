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
        {/* ENGINEER. <br />
        THINKER. <br />
        DEVELOPER <br />
        & EXPLORER. <br /> */}
        <svg>
          {/* <text x="50%" y="50%" text-anchor="end">
            ENGINEER.
          </text> */}
          <text text-anchor="start" x="0" y="30">
            ENGINEER.
          </text>
          <text text-anchor="start" x="40" y="60">
            THINKER.
          </text>
          <text text-anchor="start" x="20" y="90">
            DEVELOPER.
          </text>
          <text text-anchor="start" x="30" y="120">
            & EXPLORER.
          </text>
        </svg>
      </div>
      <div style={styles.aboutText}>
        Software developer. Formerly a Manager for some of the well known retail
        brands & as architect at engineering & architectural companies. Find out
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
