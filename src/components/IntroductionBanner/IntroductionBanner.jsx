import React, { useContext } from "react";
import { AppContext } from "../../App";

import colors from "../../config/colors";
import FooterForBanner from "../FooterForBanner";
import HeaderForBanner from "../HeaderForBanner";

import PagePalette from "../../config/PagePalette";

export default function TickTackToeBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);

  const pageNumber = 1;
  const lineOne = "Hello.";
  const lineTwo = "I'm Ed";
  const lineThree = "And This is My Personal Portfolio Website!";

  return (
    <div
      style={{
        backgroundColor: PagePalette[pageNumber].primary,
      }}
    >
      <div className="features">
        <div className="flex-container-80">
          <div
            className="banner"
            style={{
              backgroundColor: PagePalette[pageNumber].primary,
            }}
          >
            <HeaderForBanner
              color={PagePalette[pageNumber].secondary}
              page={pageNumber}
            />
            <div style={styles.textWrapper}>
              <div>Text To Change</div>
              <div>Text To Change</div>
              <div>Text To Change</div>
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
    gridTemplateRows: "60px 60px 60px",
    gap: "5px",
    alignItems: "center",
    justifyContent: "start",
    fontSize: "60px",
    color: colors.white,
    cursor: "pointer",
  },
};
