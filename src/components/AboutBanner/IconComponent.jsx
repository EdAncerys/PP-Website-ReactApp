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
        transform: hover ? "scale(0.95)" : "scale(1)",
        transition: "all 0.5s cubic-bezier(0.2, 0.6, 0.2, 1)",
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
