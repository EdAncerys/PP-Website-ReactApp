import React, { useContext } from 'react';
import { TiBackspaceOutline } from 'react-icons/ti';
import { AppContext } from '../App';
import GoToPageButton from './GoToPageButton';

import colors from '../config/colors';
import PagePalette from '../config/PagePalette';

export default function Header({ color }) {
  const { manageContextState } = useContext(AppContext);

  const backgroundColor = color ? color : colors.black;
  const textColor = color ? colors.black : colors.white;

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
        userSelect: 'none',
        cursor: 'default',
      }}
    >
      <div
        className="logo"
        style={{
          display: 'grid',
          justifyItems: 'start',
          paddingLeft: 30,
          fontSize: 30,
          cursor: 'pointer',
        }}
        onClick={() => manageContextState.setPage(false)}
      >
        Ed Ancerys
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
          color={PagePalette[manageContextState.page].primary}
          hoverColor={PagePalette[manageContextState.page].secondary}
          page={false}
        />
      </div>
    </div>
  );
}
