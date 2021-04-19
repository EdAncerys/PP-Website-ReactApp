import React, { useState } from "react";

export default function IconComponent({ icon, color, hoverColor, onClick }) {
  const [hover, setHover] = useState(false);

  const iconColor = hover ? hoverColor : color;

  return (
    <div
      style={{
        display: "grid",
        alignContent: "center",
        alignItems: "center",
        cursor: "pointer",
        color: iconColor,
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
