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
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 375,
        width: 200,
        border: `4px solid ${color}`,
        borderRadius: '30px 30px 30px 30px',
        boxShadow: handleShadow,
        overflow: 'hidden',
        transition: 'all 0.6s ease-in-out',
        cursor: 'pointer',
        backgroundColor: 'white',
      }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleChange()}
    >
      <div style={styles.wrapper}>
        <div
          style={{
            width: 100,
            height: 20,
            borderRadius: '0px 0px 20px 20px',
            backgroundColor: color,
          }}
        ></div>
      </div>
      <div style={styles.content}>
        {!hover && <img style={styles.img} src={img} alt={altText} />}
        {hover && (
          <div style={{ color: color, padding: 10, overflow: 'hidden' }}>
            {text}
          </div>
        )}
      </div>
      <div style={styles.wrapper}>
        <div
          style={{
            width: 100,
            height: 10,
            borderRadius: '5px 5px 5px 5px',
            marginBottom: 5,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}

const styles = {
  content: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    height: 330,
    width: 200,
    overflow: 'hidden',
  },
  wrapper: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 200,
  },
};
