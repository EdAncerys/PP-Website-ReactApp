import React, { useContext } from "react";
import { IoMdFingerPrint } from "react-icons/io";
import { AppContext } from "../App";
import GoToPageButton from "./GoToPageButton";

import colors from "../config/colors";
import PagePalette from "../config/PagePalette";

export default function Header({ color }) {
  const { manageAppContext } = useContext(AppContext);

  const pageNumber = manageAppContext.page;
  const textColor = color ? colors.black : colors.white;

  return (
    <div
      className="features"
      style={{
        backgroundColor: "rgba(248, 248, 248, 0.85)",
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
          <div
            className="logo"
            style={{
              display: "grid",
              justifyItems: "start",
              fontSize: "32px",
              fontWeight: "600",
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
              cursor: "pointer",
            }}
          >
            <GoToPageButton
              icon={<IoMdFingerPrint size="30px" />}
              color={PagePalette[pageNumber].primary}
              hoverColor={PagePalette[pageNumber].secondary}
              page={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    padding: "10px 20px",
  },
};
