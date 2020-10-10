import React, { useContext } from 'react';
import { TiBackspaceOutline } from 'react-icons/ti';
import { AppContext } from '../App';
import GoToPageButton from './GoToPageButton';

import colors from '../config/colors';

export default function Header({ color }) {
  const { page } = useContext(AppContext);

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
          color={colors.mint}
          hoverColor={colors.yellow}
          page={false}
        />
      </div>
    </div>
  );
}
