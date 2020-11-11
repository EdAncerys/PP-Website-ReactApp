import React, { useContext } from 'react';
import { AppContext } from '../App';

import colors from '../config/colors';

export default function Footer({ color }) {
  const { manageAppContext } = useContext(AppContext);

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
      className="teko"
      style={{
        width: '100%',
        display: 'grid',
        alignContent: 'center',
        gridTemplateColumns: 'auto auto',
        paddingTop: 30,
        paddingBottom: 30,
        borderTop: `1px solid ${color}`,
        color: textColor,
        fontSize: 14,
        backgroundColor: backgroundColor,
        userSelect: 'none',
        cursor: 'default',
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
