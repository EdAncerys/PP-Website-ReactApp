import React, { useState, useContext } from 'react';
import { AppContext } from '../App';

import pagePalette from '../config/PagePalette';

export default function Button({ title = 'Title', solid = true, onClick }) {
  const [hover, setHover] = useState(false);
  const { manageAppContext } = useContext(AppContext);

  const btnTextColor = solid
    ? pagePalette[manageAppContext.page].secondary
    : pagePalette[manageAppContext.page].primary;
  const btnBackgroundColor = solid
    ? pagePalette[manageAppContext.page].primary
    : pagePalette[manageAppContext.page].secondary;

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: hover ? btnBackgroundColor : btnTextColor,
        backgroundColor: hover ? btnTextColor : btnBackgroundColor,
        borderRadius: 20,
        fontWeight: 500,
        fontSize: 24,
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
