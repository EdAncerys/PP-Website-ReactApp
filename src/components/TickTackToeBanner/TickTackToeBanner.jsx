import React, { useContext } from "react";
import { AppContext } from "../../App";
import ImageContainer from "../ImageContainer";
import TickTackToeImg from "../../img/TicTackToe.png";
import textDescription from "../../text/ProjectDescription";
import HeaderForBanner from "../HeaderForBanner";
import FooterForBanner from "../FooterForBanner";

import PagePalette from "../../config/PagePalette";
import colors from "../../config/colors";

export default function TickTackToeBanner({ props }) {
  const { manageAppContext } = useContext(AppContext);
  const mediaQuery = manageAppContext.mediaQuery;

  const pageNumber = 3;

  return (
    <div
      style={{
        backgroundColor: PagePalette[pageNumber].primary,
      }}
    >
      <div className="features teko">
        <div className="flex-container-90">
          <div className="banner">
            <HeaderForBanner
              color={PagePalette[pageNumber].secondary}
              page={pageNumber}
            />
            <div style={styles.imageContainer}>
              <ImageContainer
                img={TickTackToeImg}
                altText="Tick-Tack-Toe"
                text={textDescription.TickTackToe}
                color={PagePalette[pageNumber].secondary}
                backgroundColor={colors.white}
              />
            </div>
            <FooterForBanner
              name="Tic Tack Toe"
              type="Game"
              color={PagePalette[pageNumber].secondary}
              page={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    justifyContent: "center",
    width: "100%",
  },
  imageContainer: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
  },
};
