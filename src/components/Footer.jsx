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
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'grid',
        alignContent: 'center',
        gridTemplateColumns: 'auto auto',
        height: 80,
        borderTop: `1px solid ${color}`,
        color: textColor,
        fontSize: 14,
        backgroundColor: backgroundColor,
      }}
    >
      <div style={{ display: 'grid', justifyItems: 'start', paddingLeft: 30 }}>
        &copy; Copyright {year}. All Rights Reserved
      </div>
      <div style={{ display: 'grid', justifyItems: 'end', paddingRight: 30 }}>
        {date}
      </div>
    </div>
  );
}
