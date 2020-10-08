import React from 'react';

import colors from '../config/colors';

export default function Header({ color }) {
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
        Logo Sign
      </div>
      <div style={{ display: 'grid', justifyItems: 'end', paddingRight: 30 }}>
        Go Back Button
      </div>
    </div>
  );
}
