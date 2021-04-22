import React, { useContext } from "react";
import { AppContext } from "../App";

import { IoMdFingerPrint } from "react-icons/io";
import GoToPageButton from "../components/GoToPageButton";

import PagePalette from "../config/PagePalette";
import colors from "../config/colors";

export default function FooterForBanner({ color, page, name, type }) {
  const pageNumber = page;
  const colorPrimary = color ? color : PagePalette[pageNumber].secondary;
  const colorSecondary = colors.white;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
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
      <div style={styles.goToBtn}>
        <GoToPageButton
          icon={<IoMdFingerPrint size="35px" />}
          hoverColor={colorSecondary}
          page={pageNumber}
        />
      </div>
    </div>
  );
}

const styles = {
  footerText: {
    display: "grid",
    width: "100%",
  },
  keyValue: {
    paddingLeft: "10px",
  },
  goToBtn: {
    display: "grid",
    justifyContent: "end",
  },
};
