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
        position: "relative",
        width: "100%",
        display: "grid",
        alignContent: "center",
        gridTemplateColumns: "auto auto",
        paddingTop: "2vh",
        paddingBottom: "2vh",
        borderTop: `1px solid ${color}`,
        color: textColor,
        fontSize: "3vh",
        backgroundColor: backgroundColor,
        userSelect: "none",
        cursor: "default",
      }}
    >
      <div
        style={{ display: "grid", justifyItems: "start", paddingLeft: "2vh" }}
      >
        &copy; Copyright {year}. All Rights Reserved
      </div>
      <div
        style={{ display: "grid", justifyItems: "end", paddingRight: "2vh" }}
      >
        {date}
      </div>
    </div>
  );
}
