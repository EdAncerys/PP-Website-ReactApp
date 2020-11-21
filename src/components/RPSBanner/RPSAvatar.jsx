import React, { useState } from 'react';
import colors from '../../config/colors';

export default function RPSAvatar({ name, avatar }) {
  const [click, setClick] = useState(false);

  const color = click ? colors.red : '';

  const handleClick = () => {
    setClick(!click);
    setTimeout(() => {
      setClick(false);
    }, 500);
  };

  return (
    <div
      style={{ ...styles.container, ...{ color: color } }}
      onClick={() => handleClick()}
    >
      <div style={styles.name}>{name}</div>
      <div>{avatar}</div>
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
  },
  name: {
    fontSize: '2.5vh',
  },
};
