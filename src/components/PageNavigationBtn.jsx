import React, { useState, useContext } from "react";
import { AppContext } from "../App";

import colors from "../config/colors";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function PageNavigationBtn({ icon, color, hoverColor, page }) {
  const { manageAppContext } = useContext(AppContext);

  const [hover, setHover] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);

  const iconColor = hover ? hoverColor : color;
  const bgColor = !hover ? hoverColor : color;

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
        transform: hover ? "scale(0.9)" : "scale(1)",
        transition: "all 0.5s cubic-bezier(0.2, 0.6, 0.2, 1)",
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleClick()}
    >
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          padding: 5,
          backgroundColor: bgColor,
          borderRadius: "50%",
        }}
      >
        <div style={styles.goToIcon}>
          {icon === "left" && (
            <AiOutlineArrowLeft size="35px" color={iconColor} />
          )}
            {icon === "right" && (
            <AiOutlineArrowRight size="35px" color={iconColor} />
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  goToIcon: {
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
  },
};
