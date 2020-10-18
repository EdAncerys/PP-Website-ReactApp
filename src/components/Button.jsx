import React, { useState } from 'react';

import pagePalette from '../config/PagePalette';
import colors from '../config/colors';

export default function Button({
  title = 'Title',
  color = colors.primary,
  solid = true,
  onClick,
}) {
  const [hover, setHover] = useState(false);

  const btnTextColor = solid ? pagePalette[1].secondary : colors.white;
  const btnBackgroundColor = solid ? pagePalette[1].primary : colors.cucumber;
  const hoverColor = pagePalette[1].secondary;

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        color: hover ? colors.white : btnTextColor,
        backgroundColor: hover ? hoverColor : btnBackgroundColor,
        border: `1px solid ${hover ? hoverColor : color}`,
        borderRadius: 20,
        fontWeight: 'bold',
        fontSize: 'inherit',
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 10,
        cursor: 'pointer',
      }}
      onClick={onClick}
      onMouseOver={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      {title}
    </div>
  );
}
