import React, { useContext } from 'react';
import { TiBackspaceOutline } from 'react-icons/ti';
import { AppContext } from '../App';
import GoToPageButton from './GoToPageButton';

import colors from '../config/colors';
import PagePalette from '../config/PagePalette';

export default function Header({ color }) {
  const { manageAppContext } = useContext(AppContext);

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
        height: '10vh',
        borderTop: `1px solid ${color}`,
        color: textColor,
        fontSize: '4vh',
        backgroundColor: backgroundColor,
        userSelect: 'none',
        cursor: 'default',
        zIndex: 1,
      }}
    >
      <div
        className="logo"
        style={{
          display: 'grid',
          justifyItems: 'start',
          paddingLeft: '2vh',
          fontSize: '4vh',
          cursor: 'pointer',
        }}
        onClick={() => manageAppContext.setPage(false)}
      >
        Ed Ancerys
      </div>
      <div
        style={{
          display: 'grid',
          justifyItems: 'end',
          paddingRight: '2vh',
          cursor: 'pointer',
        }}
      >
        <GoToPageButton
          icon={<TiBackspaceOutline size="4vh" />}
          color={PagePalette[manageAppContext.page].primary}
          hoverColor={PagePalette[manageAppContext.page].secondary}
          page={false}
        />
      </div>
    </div>
  );
}
