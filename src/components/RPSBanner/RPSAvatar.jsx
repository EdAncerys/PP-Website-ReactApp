import React, { useState } from 'react';

export default function RPSAvatar({ name, avatar }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    console.log('click');
  };

  return (
    <div style={styles.container} onClick={() => handleClick()}>
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
