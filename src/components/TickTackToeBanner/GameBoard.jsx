import React from 'react';
import BoardCell from './BoardCell';

import colors from '../../config/colors';

export default function GameBoard({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.line}>
        <div style={styles.horizontal}>
          <BoardCell id={1} />
        </div>
        <div style={styles.vertical} />
        <div style={styles.horizontal}>
          <BoardCell id={2} />
        </div>
        <div style={styles.vertical} />
        <div style={styles.horizontal}>
          <BoardCell id={3} />
        </div>
      </div>
      <div style={styles.line}>
        <div style={styles.horizontal}>
          <BoardCell id={4} />
        </div>
        <div style={styles.vertical} />
        <div style={styles.horizontal}>
          <BoardCell id={5} />
        </div>
        <div style={styles.vertical} />
        <div style={styles.horizontal}>
          <BoardCell id={7} />
        </div>
      </div>
      <div style={styles.line}>
        <div style={{ ...styles.horizontal, ...{ borderBottom: 'none' } }}>
          <BoardCell id={7} />
        </div>
        <div style={styles.vertical} />
        <div style={{ ...styles.horizontal, ...{ borderBottom: 'none' } }}>
          <BoardCell id={8} />
        </div>
        <div style={styles.vertical} />
        <div style={{ ...styles.horizontal, ...{ borderBottom: 'none' } }}>
          <BoardCell id={9} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
  },
  vertical: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    borderRight: `2px solid ${colors.red}`,
    borderRadius: '20%/20px 540px 0 0 ',
    height: 80,
  },
  horizontal: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    borderBottom: `2px solid ${colors.red}`,
    borderRadius: '0 0 640px 20%/20px',
    width: 80,
  },
  line: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 40px)',
  },
};
