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
        padding: "5% 8% 0 8%",
        fontSize: 20,
        color: colorPrimary,
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
  footerText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  keyValue: {
    paddingLeft: "10px",
  },
  actions: {
    display: "flex",
  },
};
