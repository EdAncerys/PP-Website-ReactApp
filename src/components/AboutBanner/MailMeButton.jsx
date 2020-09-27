import React, { useState } from 'react';
import { GiMailbox } from 'react-icons/gi';

import colors from '../../config/colors';

export default function MailMeButton({
  text,
  color = colors.black,
  backgroundColor = colors.white,
  hoverColor = colors.darkBlue,
  onClick,
}) {
  const [hover, setHover] = useState(false);

  const iconColor = hover ? hoverColor : backgroundColor;
  const textColor = hover ? backgroundColor : color;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        columnGap: 10,
        alignContent: 'center',
        justifyContent: 'center',
        color: textColor,
        backgroundColor: iconColor,
        borderRadius: 10,
        padding: 10,
        cursor: 'pointer',
        fontSize: 20,
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {text}
      <GiMailbox />
    </div>
  );
}
