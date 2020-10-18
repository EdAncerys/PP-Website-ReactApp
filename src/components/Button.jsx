import React, { useState, useContext } from 'react';
import { AppContext } from '../App';

import pagePalette from '../config/PagePalette';
import colors from '../config/colors';

export default function Button({
  title = 'Title',
  color,
  solid = true,
  onClick,
}) {
  const [hover, setHover] = useState(false);
  const { manageAppContext } = useContext(AppContext);

  const btnTextColor = solid
    ? pagePalette[manageAppContext.page].secondary
    : pagePalette[manageAppContext.page].primary;
  const btnBackgroundColor = solid
    ? pagePalette[manageAppContext.page].primary
    : colors.cucumber;
  const hoverColor = pagePalette[manageAppContext.page].secondary;

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
