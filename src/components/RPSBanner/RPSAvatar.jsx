import React, { useState } from 'react';

import colors from '../../config/colors';

export default function RPSAvatar({ name, avatar, RPS }) {
  const [click, setClick] = useState(false);

  const color = click ? colors.red : '';
  const transform = click ? 'scale(0.95)' : 'scale(1)';

  const handleClick = () => {
    setClick(!click);
    setTimeout(() => {
      setClick(false);
    }, 200);
  };

  return (
    <div
      style={{ ...styles.container, ...{ color: color, transform: transform } }}
      onClick={() => handleClick()}
    >
      <div style={styles.name}>{name}</div>
      <div>{avatar}</div>
      <div style={styles.RPS}>{RPS}</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    transition: '0.15s',
  },
  name: {
    fontSize: '2.5vh',
  },
  RPS: {
    height: '4vh',
    fontSize: '3vh',
  },
};
