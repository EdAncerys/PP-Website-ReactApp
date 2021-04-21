import React, { useState } from "react";

import colors from "../../config/colors";

export default function RPSAvatar({ name, avatar, RPS, avatarColor }) {
  const [click, setClick] = useState(false);

  const backgroundColor = avatarColor ? avatarColor : "";
  const color = click ? colors.danger : backgroundColor;
  const transform = click ? "scale(0.95)" : "scale(1)";

  const handleClick = () => {
    setClick(!click);
    setTimeout(() => {
      setClick(false);
    }, 200);
  };

  return (
    <div
      style={{ ...styles.container, ...{ color: color, transform: transform } }}
      onClick={() => handleClick()}
    >
      <div style={styles.name}>{name}</div>
      <div>{avatar}</div>
      <div style={styles.RPS}>{RPS}</div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.5s cubic-bezier(0.2, 0.6, 0.2, 1)",
  },
  name: {
    fontSize: "25px",
  },
  RPS: {
    height: "80px",
    fontSize: "20px",
  },
};
