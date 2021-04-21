import React, { useState } from "react";
import { GiMailbox } from "react-icons/gi";

import colors from "../../config/colors";

export default function MailMeButton({
  text,
  color = colors.black,
  backgroundColor = colors.white,
  hoverColor = colors.darkBlue,
}) {
  const [hover, setHover] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);

  const iconColor = hover ? hoverColor : backgroundColor;
  const textColor = hover ? backgroundColor : color;

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
        color: textColor,
        backgroundColor: iconColor,
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
      {text}
      <GiMailbox />
    </div>
  );
}
