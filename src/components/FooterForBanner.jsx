import * as React from "react";
import { AppContext } from "../App";

import PageNavigationBtn from "./PageNavigationBtn";

import PagePalette from "../config/PagePalette";
import colors from "../config/colors";

export default function FooterForBanner({ color, page, name, type }) {
  const pageNumber = page;
  const colorPrimary = color ? color : PagePalette[pageNumber].secondary;
  const colorSecondary = colors.white;

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        padding: "0 10%",
        fontSize: 20,
        color: colorPrimary,
      }}
    >
      <div style={styles.footerText}>
        <div>&#123;</div>
        <div style={styles.keyValue}>Name : {name} ,</div>
        <div style={styles.keyValue}>Type : {type}</div>
        <div>&#125;</div>
      </div>
      <div style={styles.actions}>
        <PageNavigationBtn
          icon="right"
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
