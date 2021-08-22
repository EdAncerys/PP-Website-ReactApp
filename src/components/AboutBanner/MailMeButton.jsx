import React, { useState } from "react";

import colors from "../../config/colors";
import { GiMailbox } from "react-icons/gi";

export default function MailMeButton({
  title,
  color = colors.white,
  backgroundColor = colors.darkBlue,
}) {
  const [hover, setHover] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);

  const handleClick = () => {
    setClickEffect(true);
    document.location = "mailto: lookatemail@gmail.com";
    setTimeout(() => {
      setClickEffect(false);
    }, 200);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        columnGap: 10,
        alignContent: "center",
        justifyContent: "center",
        color: color,
        backgroundColor: backgroundColor,
        opacity: hover ? 0.75 : 1,
        borderRadius: 10,
        padding: 10,
        cursor: "pointer",
        fontSize: 20,
        transform: clickEffect ? "scale(0.99)" : "scale(1)",
        transition: "all 0.5s cubic-bezier(0.2, 0.6, 0.2, 1)",
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleClick()}
    >
      <div>{title}</div>
      <div>
        <GiMailbox />
      </div>
    </div>
  );
}
