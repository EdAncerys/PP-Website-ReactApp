import React, { useState, useContext } from "react";
import { AppContext } from "../App";

import colors from "../config/colors";

export default function GoToPageButton({ icon, color, hoverColor, page }) {
  const { manageAppContext } = useContext(AppContext);

  const [hover, setHover] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);

  const iconColor = !hover ? hoverColor : color;

  const handleClick = () => {
    setClickEffect(true);
    setTimeout(() => {
      setClickEffect(false);
    }, 200);
    manageAppContext.setPage(page);
  };

  return (
    <div
      style={{
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
        color: iconColor,
        cursor: "pointer",
        transform: hover ? "scale(0.95)" : "scale(1)",
        transition: "all 0.5s cubic-bezier(0.2, 0.6, 0.2, 1)",
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleClick()}
    >
      <div style={styles.goToContainer}>
        <div></div>
        <div style={styles.goToIcon}>{icon}</div>
      </div>
    </div>
  );
}

const styles = {
  goToContainer: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    alignContent: "center",
    justifyContent: "center",
    gap: "5px",
  },
  goToIcon: {
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
  },
};
