import React, { useState } from 'react';
import { BsPhone } from 'react-icons/bs';

import colors from '../config/colors';

export default function ImageContainer({ img, altText, text, color }) {
  const [hover, setHover] = useState(false);

  const handleRadius = hover ? '10% 10% 0% 10%' : '50% 50% 10% 50%';
  const handleShadow = hover ? `` : `5px 10px 35px -10px ${colors.black}`;
  const handleBorder = hover ? `1px solid ${color}` : '';

  const handleChange = () => {
    setHover(!hover);
  };

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        // alignItems: 'center',
        height: 375,
        width: 200,
        border: `4px solid ${color}`,
        borderRadius: '30px 30px 30px 30px',
        boxShadow: handleShadow,
        overflow: 'hidden',
        transition: 'all 0.6s ease-in-out',
        cursor: 'pointer',
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleChange()}
    >
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          width: 100,
          height: 50,
          backgroundColor: color,
        }}
      ></div>
      {!hover && <img style={styles.img} src={img} alt={altText} />}
      {hover && (
        <div style={{ color: color, padding: 10, overflow: 'hidden' }}>
          {text}
        </div>
      )}
    </div>
  );
}

const styles = {
  img: {
    height: 200,
  },
};
