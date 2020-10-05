import React, { useState } from 'react';

import colors from '../config/colors';

export default function GoToPageButton({ icon, hoverColor }) {
  const [hover, setHover] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);

  const iconColor = hover ? hoverColor : colors.black;

  const handleClick = () => {
    setClickEffect(true);
    setTimeout(() => {
      setClickEffect(false);
    }, 200);
  };

  return (
    <div
      style={{
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center',
        color: iconColor,
        cursor: 'pointer',
        transform: clickEffect ? 'scale(0.90)' : 'scale(1)',
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleClick()}
    >
      {icon}
    </div>
  );
}
