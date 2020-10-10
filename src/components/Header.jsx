import React from 'react';
import { TiBackspaceOutline } from 'react-icons/ti';

import colors from '../config/colors';
import GoToPageButton from './GoToPageButton';

export default function Header({ color }) {
  const backgroundColor = color ? color : colors.black;
  const textColor = color ? colors.mediumGrey : colors.white;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
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
      <div
        style={{
          display: 'grid',
          justifyItems: 'end',
          paddingRight: 30,
          cursor: 'pointer',
        }}
      >
        <GoToPageButton
          icon={<TiBackspaceOutline size={30} />}
          color={colors.cucumber}
          hoverColor={colors.yellow}
          page={false}
        />
      </div>
    </div>
  );
}
