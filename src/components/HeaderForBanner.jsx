import React from 'react';
import { GiDwarfFace } from 'react-icons/gi';

export default function HeaderForBanner({ color }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '10px 20px 10px 25px 10px',
        alignItems: 'center',
        fontSize: 18,
        color: color,
      }}
    >
      <div>&#123;</div>
      <GiDwarfFace />:<div>001</div>
      <div>&#125;</div>
    </div>
  );
}
