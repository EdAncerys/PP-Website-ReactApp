import React, { useContext } from "react";
import { IoMdFingerPrint } from "react-icons/io";
import { AppContext } from "../App";
import GoToPageButton from "./GoToPageButton";

import colors from "../config/colors";
import PagePalette from "../config/PagePalette";

export default function Header({ color }) {
  const { manageAppContext } = useContext(AppContext);

  const pageNumber = manageAppContext.page;
  const textColor = colors.black;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        display: "grid",
        alignContent: "center",
        gridTemplateColumns: "auto auto",
        height: "80px",
        borderTop: `1px solid ${color}`,
        color: textColor,
        fontSize: "4vh",
        userSelect: "none",
        cursor: "default",
        zIndex: 1,
      }}
    >
      <div
        className="logo"
        style={{
          display: "grid",
          justifyItems: "start",
          paddingLeft: "20px",
          fontSize: "32px",
          fontWeight: "800",
          cursor: "pointer",
        }}
        onClick={() => manageAppContext.setPage(false)}
      >
        Ed Ancerys
      </div>
      <div
        style={{
          display: "grid",
          justifyItems: "end",
          paddingRight: "2vh",
          cursor: "pointer",
        }}
      >
        <GoToPageButton
          icon={<IoMdFingerPrint size="4vh" />}
          color={PagePalette[pageNumber].primary}
          hoverColor={PagePalette[pageNumber].secondary}
          page={false}
        />
      </div>
    </div>
  );
}
