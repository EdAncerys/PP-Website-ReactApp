import React from 'react';
import { FaPlay } from 'react-icons/fa';
import GoToPageButton from '../components/GoToPageButton';

import colors from '../config/colors';

export default function FooterForBanner({ color, page, name, type }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '95% auto',
        alignItems: 'center',
        fontSize: 20,
        color: color,
      }}
    >
      <div style={styles.footerText}>
        <div>&#123;</div>
        <div>Name : {name} ,</div>
        <div>Type : {type}</div>
        <div>&#125;</div>
      </div>
      <GoToPageButton icon={<FaPlay />} hoverColor={colors.white} page={page} />
    </div>
  );
}

const styles = {
  footerText: {
    display: 'grid',
  },
};
