import React, { useState, useContext, useEffect } from 'react';
import { TickTackToeContext } from '../../pages/TickTackToePage';

import colors from '../../config/colors';

export default function Character({ src, name }) {
  const { manageTickTackToeContext } = useContext(TickTackToeContext);

  const [clickEffect, setClickEffect] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(!fade);
  }, []);

  useEffect(() => {
    const winner = manageTickTackToeContext.winner.name;
    if (winner !== name) {
      setFade(!fade);
      console.log('hey');
    }
  }, [manageTickTackToeContext.winner]);

  const handleImageClick = () => {
    setClickEffect(true);
    setTimeout(() => {
      setClickEffect(false);
    }, 200);
  };

  return (
    <div
      style={{
        transform: clickEffect ? 'scale(0.95)' : 'scale(1)',
        opacity: fade ? 1 : 0.2,
      }}
      key={name}
    >
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          marginBottom: 10,
          color: clickEffect ? colors.red : '',
        }}
      >
        {name}
      </div>
      <img
        style={{ height: '15vh' }}
        alt={name}
        src={src}
        onClick={() => handleImageClick()}
      />
    </div>
  );
}
