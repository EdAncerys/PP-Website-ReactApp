import React from "react";
import { IoMdFingerPrint } from "react-icons/io";
import GoToPageButton from "../components/GoToPageButton";

import colors from "../config/colors";

export default function FooterForBanner({ color, page, name, type }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        fontSize: 20,
        color: color,
      }}
    >
      <div style={styles.footerText}>
        <div>&#123;</div>
        <div>Name : {name} ,</div>
        <div>Type : {type}</div>
        <div>&#125;</div>
      </div>
      <div style={styles.goToBtn}>
        <GoToPageButton
          icon={<IoMdFingerPrint />}
          hoverColor={colors.red}
          page={page}
        />
      </div>
    </div>
  );
}

const styles = {
  footerText: {
    display: "grid",
  },
  goToBtn: {
    display: "grid",
    justifyContent: "end",
  },
};
