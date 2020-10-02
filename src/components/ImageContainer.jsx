import React, { useState } from 'react';
import { BsPhone } from 'react-icons/bs';

import colors from '../config/colors';

export default function ImageContainer({ children }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        width: 250,
        border: `1px solid ${colors.white}`,
        borderRadius: '50% 50% 10% 50%',
        boxShadow: '5px 2px',
        overflow: 'hidden',
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </div>
  );
}
