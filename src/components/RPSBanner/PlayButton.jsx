import React, { useState } from 'react';

import colors from '../../config/colors';

import { BsPlayFill } from 'react-icons/bs';

export default function PlayButton({ title = 'title', onClick }) {
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
      onClick={() => {
        handleClick();
        onClick();
      }}
    >
      <div style={styles.btnText}>{title}</div>
      <BsPlayFill size="5vh" />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gridTemplateColumns: 'auto auto auto',
    cursor: 'pointer',
    border: '1px solid',
    borderRadius: 20,
    marginTop: 20,
    transition: '0.15s',
  },
  btnText: {
    fontSize: '3vh',
    marginLeft: '2vh',
  },
};
