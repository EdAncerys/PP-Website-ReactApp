import React from "react";
import SocialBanner from "./SocialBanner";
import MailMeButton from "./MailMeButton";

import colors from "../../config/colors";

export default function AboutBanner({ mediaQuery }) {
  return (
    <div
      className="teko"
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: colors.yellow,
        userSelect: "none",
        cursor: "default",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 350,
          paddingLeft: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "start",
          }}
        >
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
        <div style={{ fontSize: 20 }}>
          Software developer. Formerly a Manager for some of the well known
          retail brands & architect at engineering & architectural companies.
          Find out more about me, follow my work, words & photos below.
        </div>
        <div className="bodyWrapper">
          <SocialBanner />
        </div>
        <MailMeButton title="Say Hello!" />
      </div>
    </div>
  );
}
