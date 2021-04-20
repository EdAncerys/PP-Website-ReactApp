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
                style={{ color: lineOneColor }}
                onMouseOver={() => setLineOneHover(true)}
                onMouseLeave={() => setLineOneHover(false)}
                onClick={() => handleLineOneClick()}
              >
                {lineOne}
              </div>
              <div
                style={{ color: lineTwoColor }}
                onMouseOver={() => setLineTwoHover(true)}
                onMouseLeave={() => setLineTwoHover(false)}
                onClick={() => handleLineOneClick()}
              >
                {lineTwo}
              </div>
              <div
                style={{ color: lineThreeColor }}
                onMouseOver={() => setLineThreeHover(true)}
                onMouseLeave={() => setLineThreeHover(false)}
                onClick={() => handleLineOneClick()}
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
    gridTemplateRows: "70px 70px 70px",
    gap: "5px",
    alignItems: "center",
    justifyContent: "start",
    fontSize: "70px",
    color: colors.white,
    cursor: "pointer",
  },
};
