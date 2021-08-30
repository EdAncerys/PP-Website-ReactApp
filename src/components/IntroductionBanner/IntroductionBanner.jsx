import * as React from "react";
import { AppContext } from "../../App";

import colors from "../../config/colors";
import PagePalette from "../../config/PagePalette";

export default function IntroductionBanner({ props }) {
  const { manageAppContext } = React.useContext(AppContext);
  const SLIDE_OVERLAP = manageAppContext.SLIDE_OVERLAP;
  const mediaQuery = manageAppContext.mediaQuery;

  const [lineOneHover, setLineOneHover] = React.useState(false);
  const [lineTwoHover, setLineTwoHover] = React.useState(false);
  const [lineThreeHover, setLineThreeHover] = React.useState(false);

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

  const lineOne = lineOneHover ? "Get In Touch." : "Hello.";
  const lineTwo = lineTwoHover ? "Find Out More." : "I'm Ed.";
  const lineThree = lineThreeHover
    ? "What I'm Working On?"
    : "Learn More About Me!";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        // margin: `${SLIDE_OVERLAP * 2}px 0 0 0`,
        fontSize: mediaQuery ? "5vw" : "3vw",
        backgroundColor: PagePalette[pageNumber].primary,
      }}
    >
      <div>
        <div
          style={styles.container}
          onMouseOver={() => setLineOneHover(true)}
          onMouseLeave={() => setLineOneHover(false)}
          onClick={() => handleLineOneClick()}
        >
          <div
            className="animationOne"
            style={{ color: lineOneHover ? colors.yellow : colors.white }}
            title={lineOne}
          >
            {lineOne}
          </div>
        </div>
        <div
          style={styles.container}
          onMouseOver={() => setLineTwoHover(true)}
          onMouseLeave={() => setLineTwoHover(false)}
          onClick={() => handleLineTwoClick()}
        >
          <div
            className="animationTwo"
            style={{ color: lineTwoHover ? colors.yellow : colors.white }}
            title={lineTwo}
          >
            {lineTwo}
          </div>
        </div>
        <div
          style={styles.container}
          onMouseOver={() => setLineThreeHover(true)}
          onMouseLeave={() => setLineThreeHover(false)}
          onClick={() => handleLineThreeClick()}
        >
          <div
            className="animationThree"
            style={{ color: lineThreeHover ? colors.yellow : colors.white }}
            title={lineThree}
          >
            {lineThree}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    padding: "20px 0",
    paddingLeft: 30,
  },
};
