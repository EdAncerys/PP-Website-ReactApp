import React, { useState } from "react";

import colors from "../../config/colors";

import { BsPlayFill } from "react-icons/bs";

export default function PlayButton({ title = "title", onClick, btnColor }) {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);

  const color = hover ? colors.danger : btnColor;
  const transform = click ? "scale(0.95)" : "scale(1)";

  const handleClick = () => {
    setClick(!click);
    setTimeout(() => {
      setClick(false);
    }, 200);
  };

  return (
    <div
      style={{
        ...styles.container,
        ...{
          color: color,
          transform: transform,
          transform: hover ? "scale(0.98)" : "scale(1)",
        },
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        handleClick();
        onClick();
      }}
    >
      <div style={styles.btnText}>{title}</div>
      <BsPlayFill size="40px" />
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    gridTemplateColumns: "auto auto auto",
    cursor: "pointer",
    border: "1px solid",
    borderRadius: 20,
    marginTop: 20,
    transition: "all 0.5s cubic-bezier(0.2, 0.6, 0.2, 1)",
  },
  btnText: {
    fontSize: "30px",
    marginLeft: "20px",
  },
};
