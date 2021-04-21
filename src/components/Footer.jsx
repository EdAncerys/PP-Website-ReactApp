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
      className="teko"
      style={{
        display: "grid",
        alignContent: "center",
        justifyItems: "center",
        width: "100%",
        padding: "10px 20px",
        borderTop: `1px solid ${color}`,
        color: textColor,
        fontSize: "20px",
        backgroundColor: backgroundColor,
      }}
    >
      <div  style={styles.wrapper}>
        <div
          style={{ display: "grid", justifyItems: "start", paddingLeft: "20px" }}
        >
          &copy; Copyright {year}. All Rights Reserved
        </div>
        <div
          style={{ display: "grid", justifyItems: "end", paddingRight: "20px" }}
        >
          {date}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "grid",
    alignContent: "center",
    justifyItems: "center",
    gridTemplateColumns: "auto auto",
    width: "1000px",
  }
};
