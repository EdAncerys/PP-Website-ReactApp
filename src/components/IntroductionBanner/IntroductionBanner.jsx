import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

import colors from "../../config/colors";
import FooterForBanner from "../FooterForBanner";
import HeaderForBanner from "../HeaderForBanner";

import PagePalette from "../../config/PagePalette";

export default function IntroductionBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const [lineOneHover, setLineOneHover] = useState(false);
  const [lineTwoHover, setLineTwoHover] = useState(false);
  const [lineThreeHover, setLineThreeHover] = useState(false);

  const handleLineOneClick = () => {
    document.location = "mailto: lookatemail@gmail.com";
  };
  const handleLineTwoClick = () => {
    setTimeout(() => {
      manageAppContext.setPage(1);
    }, 500)
  };
  const handleLineThreeClick = () => {
    setTimeout(() => {
      manageAppContext.setPage(2);
    }, 500)
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

  // const animate = lineOneHover ? "animate" : "";

  return (
    <div
      style={{
        backgroundColor: PagePalette[pageNumber].primary,
      }}
    >
      <div className="features teko">
        <div className="flex-container-90">
          <div
            className="banner-main"
            style={{
              backgroundColor: PagePalette[pageNumber].primary,
            }}
          >
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
            <FooterForBanner
              name="About"
              type="Introduction"
              color={PagePalette[pageNumber].secondary}
              page={pageNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
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
