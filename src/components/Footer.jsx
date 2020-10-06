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

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        gridTemplateColumns: '80% auto',
        height: 50,
        borderTop: `1px solid ${color}`,
        color: colors.mediumGrey,
        fontSize: 12,
      }}
    >
      <div>&copy; Copyright {year}. All Rights Reserved</div>
      <div>{date}</div>
    </div>
  );
}
