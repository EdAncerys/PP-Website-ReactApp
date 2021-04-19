import React, { useState, useContext } from "react";
import { AppContext } from "../App";

import colors from "../config/colors";

export default function GoToPageButton({ icon, color, hoverColor, page }) {
  const { manageAppContext } = useContext(AppContext);

  const [hover, setHover] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);

  const iconColor = hover ? hoverColor : color;

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
        transform: clickEffect ? "scale(0.90)" : "scale(1)",
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleClick()}
    >
      <div style={styles.goToIcon}>
        <div>go</div>
        <div>{icon}</div>
      </div>
    </div>
  );
}

const styles = {
  goToIcon: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5px",
  },
};
