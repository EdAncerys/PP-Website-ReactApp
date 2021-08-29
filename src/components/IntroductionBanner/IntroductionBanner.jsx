import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

import colors from "../../config/colors";
import FooterForBanner from "../FooterForBanner";

import PagePalette from "../../config/PagePalette";

export default function IntroductionBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const SLIDE_OVERLAP = manageAppContext.SLIDE_OVERLAP;
  const mediaQuery = manageAppContext.mediaQuery;
  const [lineOneHover, setLineOneHover] = useState(false);
  const [lineTwoHover, setLineTwoHover] = useState(false);
  const [lineThreeHover, setLineThreeHover] = useState(false);

  const handleLineOneClick = () => {
    document.location = "mailto: lookatemail@gmail.com";
  };
  const handleLineTwoClick = () => {
    setTimeout(() => {
      manageAppContext.setPage(1);
    }, 500);
  };
  const handleLineThreeClick = () => {
    setTimeout(() => {
      manageAppContext.setPage(2);
    }, 500);
  };

  const pageNumber = 1;
  const lineOneColor = lineOneHover ? colors.danger : colors.white;
  const lineTwoColor = lineTwoHover ? colors.danger : colors.white;
  const lineThreeColor = lineThreeHover ? colors.danger : colors.white;

  const lineOne = lineOneHover ? "Get In Touch" : "Hello.";
  const lineTwo = lineTwoHover ? "Find Out More" : "I'm Ed.";
  const lineThree = lineThreeHover
    ? "What I'm Working On"
    : "Learn More About Me.";

  return (
    <div
      style={{
        ...styles.container,
        paddingTop: mediaQuery ? SLIDE_OVERLAP : "",
        backgroundColor: PagePalette[pageNumber].primary,
      }}
    >
      {/* <div className="features teko">
        <div className="flex-container-90">
          <div className="banner-main">
            <div style={styles.textWrapper}>
              <div
                className="animate"
                style={{ color: lineOneColor }}
                onMouseOver={() => setLineOneHover(true)}
                onMouseLeave={() => setLineOneHover(false)}
                onClick={() => handleLineOneClick()}
              >
                {lineOne}
              </div>
              <div
                className="animate"
                style={{ color: lineTwoColor }}
                onMouseOver={() => setLineTwoHover(true)}
                onMouseLeave={() => setLineTwoHover(false)}
                onClick={() => handleLineTwoClick()}
              >
                {lineTwo}
              </div>
              <div
                className="animate"
                style={{ color: lineThreeColor }}
                onMouseOver={() => setLineThreeHover(true)}
                onMouseLeave={() => setLineThreeHover(false)}
                onClick={() => handleLineThreeClick()}
              >
                {lineThree}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="animate">
        <h1>
          <span>I</span>M<span>POSSIBLE</span>
        </h1>
      </div>
      <div>
        <svg width="100%" height="100%">
          <text x="50%" y="60%" text-anchor="middle">
            Gracias
          </text>
        </svg>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    alignItems: "center",
    width: "100%",
  },
  textWrapper: {
    display: "grid",
    gap: "10px",
    alignItems: "center",
    justifyContent: "start",
    fontSize: "clamp(32px, 70px, 12vw)",
    color: colors.white,
    cursor: "pointer",
  },
};
