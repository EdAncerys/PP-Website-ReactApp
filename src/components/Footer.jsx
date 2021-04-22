import React, { useContext } from "react";
import { AppContext } from "../App";

import colors from "../config/colors";

export default function Footer({ color }) {
  const { manageAppContext } = useContext(AppContext);

  const year = new Date().getFullYear();
  const date = `${
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate()
  }`;
  const backgroundColor = color ? color : colors.black;
  const textColor = color ? colors.mediumGrey : colors.white;

  return (
    <div
      className="features teko"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div
        className="flex-container"
        style={{
          maxWidth: "800px",
          color: textColor,
          fontSize: "20px",
        }}
      >
        <div style={styles.wrapper}>
          <div style={{ display: "grid", justifyItems: "start" }}>
            &copy; Copyright {year}. All Rights Reserved
          </div>
          <div style={{ display: "grid", justifyItems: "end" }}>{date}</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "auto auto",
    padding: "10px 0",
  },
};
