import React from 'react';

import colors from '../config/colors';

export default function Footer({ color }) {
  const year = new Date().getFullYear();
  const date = `${
    new Date().getFullYear() +
    '-' +
    (new Date().getMonth() + 1) +
    '-' +
    new Date().getDate()
  }`;
  const backgroundColor = color ? color : colors.black;
  const textColor = color ? colors.mediumGrey : colors.white;

  return (
    <div
      style={{
        display: 'grid',
        alignContent: 'center',
        gridTemplateColumns: 'auto auto',
        height: 50,
        borderTop: `1px solid ${color}`,
        color: textColor,
        fontSize: 14,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: backgroundColor,
      }}
    >
      <div>&copy; Copyright {year}. All Rights Reserved</div>
      <div style={{ justifySelf: 'end' }}>{date}</div>
    </div>
  );
}
