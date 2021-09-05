import * as React from "react";
import { AppContext } from "../App";

import PageNavigationBtn from "./PageNavigationBtn";

import PagePalette from "../config/PagePalette";
import colors from "../config/colors";

export default function FooterForBanner({}) {
  const pageNumber = 0;
  const colorPrimary = colors.black;
  const colorSecondary = colors.yellow;

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignSelf: "flex-start",
        padding: "50px 0",
      }}
    >
      <div style={styles.actions}>
        <PageNavigationBtn
          icon="left"
          color={colorPrimary}
          hoverColor={colorSecondary}
          page={pageNumber}
        />
      </div>
    </div>
  );
}

const styles = {
  actions: {
    display: "flex",
  },
};
