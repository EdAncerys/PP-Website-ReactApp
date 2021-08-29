import React from "react";
import ImageContainer from "../ImageContainer";
import LegoManImg from "../../img/Lego-Man.png";
import textDescription from "../../text/ProjectDescription";
import HeaderForBanner from "../HeaderForBanner";
import FooterForBanner from "../FooterForBanner";

import PagePalette from "../../config/PagePalette";

export default function TickTackToeBanner({ props }) {
  const pageNumber = 2;

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: PagePalette[pageNumber].primary,
      }}
    >
      <div className="features teko">
        <div className="flex-container-90">
          <div className="banner">
            <div style={styles.imageContainer}>
              <ImageContainer
                img={LegoManImg}
                altText="Personal-Portfolio"
                text={textDescription.PP}
                color={PagePalette[pageNumber].secondary}
              />
            </div>
            <FooterForBanner
              name="Personal Portfolio. See What I'm Working On"
              type="Informational"
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
  container: {
    display: "grid",
    justifyContent: "center",
    width: "100%",
  },
  imageContainer: {
    display: "grid",
    height: "40vh",
    alignItems: "center",
    justifyContent: "center",
  },
};
